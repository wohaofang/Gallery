//打开后台页面的时候 发送请求，刷新新闻列表
$(document).ready(function() {
    var $newsTable = $('#newstable tbody');
    refreshNews();
   //添加新闻

$('#btnsubmit').click(function(e) {
        e.preventDefault();

  		//输入判断
  		if ($('#newstitle').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "" || $('#newssrc').val() === "") {
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }
            if ($('#newssrc').val() === "") {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }
        } else {
        	//提交添加
        	var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val()
            };
            console.log(jsonNews);

        	$.ajax({
                url: 'php/insert.php',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                     console.log(data);
                    alert('提交成功');
                    // 刷新列表
                    refreshNews();
                }

            });
        }

    });




  // 删除新闻功能
    // 设定删除变量
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function(e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parents().prevAll().eq(5).html();
    });
    $('#deleteModal #confirmDelete').click(function(e) {
        if (deleteId) {
            $.ajax({
                url: 'php/delete.php',
                type: 'post',
                data: { newsid: deleteId },
                datatype: 'json',
                success: function(data) {
                    console.log('删除成功');
                    // 隐藏模态框
                    $('#deleteModal').modal('hide');
                    // 刷新列表
                    refreshNews();
                }
            });
        }
    });
    // 修改新闻功能
    // 设定修改变量
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        updateId = $(this).parents().prevAll().eq(5).html();
        // console.log(updateId);
        $.ajax({
            url: 'php/curnews.php',
            type: 'get',
            data: { newsid: updateId },
            datatype: 'json',
            success:function(data){
                console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                // 整理时间数据
                var utime = data[0].newstime.split(' ')[0];
                $('#unewstime').val(utime);
                $('#unewssrc').val(data[0].newssrc);

            }
        });
    });
    $('#updateModal #confirmUpdate').click(function(e) {
        $.ajax({
            url: 'php/update.php',
            type:'post',
            data:{
                newstitle:$('#unewstitle').val(),
                newstype:$('#unewstype').val(),
                newsimg:$('#unewsimg').val(),
                newstime:$('#unewstime').val(),
                newssrc:$('#unewssrc').val(),
                id:updateId
            },
            success:function(){
                console.log('修改成功');
                // 隐藏模态框
                $('#updateModal').modal('hide');
                // 刷新列表
                refreshNews();
            }
        })
    });






//新闻列表

    function refreshNews() {
        //empty table
        $newsTable.empty();

        $.ajax({
        	type:'get',
        	url:'php/index.php',
        	datatype:'json',
            // data:{newstype:type},
        	success:function(data){
        		data.forEach(function(item, index, array){
        			var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdctrl = $('<td>');
                    // 更新按钮
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    // 删除按钮
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdsrc, $tdtime, $tdctrl);
                    $newsTable.append($tRow);
        		});
        	}
        });

    }
});
