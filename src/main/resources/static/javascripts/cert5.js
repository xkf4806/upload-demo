function fnCertLongTern(obj) {
    if ($(obj).prop('checked')) {
        $(obj).prev().val('').trigger('blur').attr('disabled', true);
    } else {
        $(obj).prev().val('').trigger('blur').attr('disabled', false);
    }
}

function renderImg() {
    $('img').each(function () {
        var $img = $(this);
        if ($img.attr('src') !== '') {
            $(this).parent().prev().hide();
            $(this).parent().show();
        }
    })
}
$(function () {
    renderImg();

    $('.fix img').click(function () {
        imgShow("#outerdiv", "#innerdiv", "#bigimg", $(this).attr('src'))
    })
    var opt = ['请上传营业执照', '请上传税务登记证', '请上传组织机构代码证', '请上传银行开户许可证', '请上传法人身份证正面', '请上传法人身份证反面'];

    /*	输入验证开始 */
    $.formValidator.initConfig({
        validatorgroup: "1",
        formID: "manageForm",
        onSuccess: function () {
            return true;
        },
        onError: function (errMsg, errElement) {
            errElement.focus();
            return false;
        }
    });

    $('#hello').formValidator({
        validatorgroup: "1",
        onShow: function () {
            return "请输入信息"
        },
        onFocus: function () {
            return '输入信息吧';
        },
        onCorrect: function () {
            return "&nbsp;"
        }
    }).inputValidator({
        min:1,
        max:10,
        empty : {
            leftEmpty :false,
            rightEmpty :false,
            emptyError :"信息不能为空"
        },
        onError:"信息错误"
    })

    $(':input[type=file]').each(function (i) {

        $(this).formValidator({
            validatorgroup: "1",
            onShow: function () {
                return opt[i];
            },
            onFocus: function () {
                return opt[i];
            },
            onCorrect: function () {
                return "&nbsp;"
            }
        }).functionValidator({
            fun : function (val, ele) {
                var src = $(ele).parent().next().find('img').attr('src');
                if (src === '') {
                    return opt[i];
                } else {
                    return true;
                }
            }
        })
    });

    $('.deleteBtn').click(function () {
        $(this).prev().attr('src', '');
        $(this).parent().hide();
        $(this).parent().prev().show();
        $(this).parent().prev().find(':input[type=file]').val('');
    });
    // renderImgList();
    var dataArr = []; // 储存所选图片的结果(文件名和base64数据)

    $('.file').each(function () {
        console.log($(this))
        if (typeof FileReader === 'undefined') {
            alert("抱歉，你的浏览器不支持 FileReader");
            $(this).attr('disabled', 'disabled');
        } else {
            $(this).on('change', readFile);
        }
    });

    function readFile(event) {
        var index = 0;
        var files = $(this).find('input')[0];
        var file = files.files['0'];
        var pictype = file.type;
        var type = pictype.split("/")[1];
        if (!type || !type.match(/jpg|png|jpeg|bmp/i)) {//判断上传文件格式
            alert("上传的图片格式不正确，请重新选择");
            files.value = '';
            return false;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert("请上传一张小于2M的照片哦！");
            files.value = '';
            return false;
        }
        var Orientation = null;
        var reader = new FileReader();
        EXIF.getData(file, function () {
            EXIF.getAllTags(this);
            Orientation = EXIF.getTag(this, 'Orientation');
        });

        reader.fileName = file.name;
        var $upBtn = $(event.target).parent();
        var $span = $upBtn.next();
        $upBtn.hide();
        $span.removeAttr('style');
        reader.readAsDataURL(file);  //转成base64
        reader.onload = function (e) {
            var img = $span.find('img')[0];
            img.onload = function () {
                var nowHeight = ReSizePic(this); //设置图片大小
                var oParent = this.parentNode;
                if (nowHeight) {
                    oParent.style.paddingTop = (oParent.offsetHeight - nowHeight) / 2 + 'px';
                }
            }
            var imgMsg = {
                field: event.target.name,
                name: this.fileName,//获取文件名
                base64: this.result   //reader.readAsDataURL方法执行完后，base64数据储存在reader.result里
            }

            dataArr.push(imgMsg);
            $span.find('img').attr('src', this.result);

            img.onclick = function () {
                imgShow("#outerdiv", "#innerdiv", "#bigimg", $span.find('img').attr('src'))
            }
            index++;
        }
    }

    $(':radio[name="chargeType"]').on('change', function () {
        window.location.href = $('#ctx').val() + "/security/document/exchange.shtml?type=" + $(this).val();
    })

    $('.submitBtn').click(function () {
        var res = jQuery.formValidator.pageIsValid('1');
        if (res) {
            send();
        }
    });

    function send() {
        var submitArr = [];
        for (var i = 0; i < dataArr.length; i++) {
            if (dataArr[i]) {
                submitArr.push(dataArr[i]);
            }
        }
        var data = {
            certVOs: submitArr,
            businessTerm: $('#corpTerm').val(),
            legalCertTerm: $('#legalPersonCertTerm').val(),
            legalCertCheck: $('#legalPersonCertTermCheck').val(),
        }
        $.ajax({
            url: $('#ctx').val() + '/security/document/certManage.shtml',
            type: 'post',
            data: JSON.stringify(data),
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (resp) {
                if (resp.code === '0'){
                    alert(resp.errMsg);
                } else {
                    showSuccess(resp);
                }
            },
            error: function () {
                console.log("发生错误")
            }
        })
    }

    function ReSizePic(ThisPic) {
        var RePicWidth = 200; //这里修改为您想显示的宽度值

        var TrueWidth = ThisPic.width; //图片实际宽度
        var TrueHeight = ThisPic.height; //图片实际高度

        if (TrueWidth > TrueHeight) {
            //宽大于高
            var reWidth = RePicWidth;
            ThisPic.width = reWidth;
            //垂直居中
            var nowHeight = TrueHeight * (reWidth / TrueWidth);
            return nowHeight;  //将图片修改后的高度返回，供垂直居中用
        } else {
            //宽小于高
            var reHeight = RePicWidth;
            ThisPic.height = reHeight;
        }
    }

    function imgShow(outerdiv, innerdiv, bigimg, src) {
        $(bigimg).attr("src", src);//设置#bigimg元素的src属性

        /*获取当前点击图片的真实大小，并显示弹出层及大图*/
        $("<img/>").attr("src", src).load(function () {
            var windowW = $(window).width();//获取当前窗口宽度
            var windowH = $(window).height();//获取当前窗口高度
            var realWidth = this.width;//获取图片真实宽度
            var realHeight = this.height;//获取图片真实高度
            var imgWidth, imgHeight;
            var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放

            if (realHeight > windowH * scale) {//判断图片高度
                imgHeight = windowH * scale;//如大于窗口高度，图片高度进行缩放
                imgWidth = imgHeight / realHeight * realWidth;//等比例缩放宽度
                if (imgWidth > windowW * scale) {//如宽度扔大于窗口宽度
                    imgWidth = windowW * scale;//再对宽度进行缩放
                }
            } else if (realWidth > windowW * scale) {//如图片高度合适，判断图片宽度
                imgWidth = windowW * scale;//如大于窗口宽度，图片宽度进行缩放
                imgHeight = imgWidth / realWidth * realHeight;//等比例缩放高度
            } else {//如果图片真实高度和宽度都符合要求，高宽不变
                imgWidth = realWidth;
                imgHeight = realHeight;
            }
            $(bigimg).css("width", imgWidth);//以最终的宽度对图片缩放

            var w = (windowW - imgWidth) / 2;//计算图片与窗口左边距
            var h = (windowH - imgHeight) / 2;//计算图片与窗口上边距
            $(innerdiv).css({"top": h, "left": w});//设置#innerdiv的top和left属性
            $(outerdiv).fadeIn("fast");//淡入显示#outerdiv及.pimg
        });

        $(outerdiv).click(function () {//再次点击淡出消失弹出层
            $(this).fadeOut("fast");
        });
    }
});