$(function() {
//  var walletCount = '';
//  
//  reqApi({
//      code: '802902',
//      sync: true
//  }).then(function(data) {
//  	hideLoading()
//      walletCount = moneyFormatBTC(data.walletCount);
        
        var fields = [{
//		        field: 'walletCount',
//		        title: '当前钱包余额',
//		        value: walletCount,
//		        readonly: true
//		    }, {
		        title: "阈值",
		        field: 'balanceStart',
				required: true,
				number: true,
				min: '0'
		    }];
		
	    var options = {
	        fields: fields,
	         buttons: [{
                title: '手动归集',
                handler: function() {
                	if($('#jsForm').valid()){
                        var data = $('#jsForm').serializeObject();
                        confirm('未归集的UTXO总额大于'+data.balanceStart+'都将被归集，确定进行操作吗？').then(function () {
                            reqApi({
                                code: '802210',
                                json: data
                            }).done(function(data) {
							    toastr.success('操作成功');
                                location.reload(true);
                            });
                        },function () {})
                    }
                }
            }]
	    };
		
	    buildDetail(options);
        
//  }, hideLoading);

})