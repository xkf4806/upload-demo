<%@ page language="java" pageEncoding="UTF-8" isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
    <style>
        .asterisk {
            color: red;
            font-weight: bold;
            font-size: 12px;
        }

        .file {
            position: relative;
            display: inline-grid;
            background: #D0EEFF;
            border: 1px solid #99D3F5;
            border-radius: 4px;
            padding: 4px 12px;
            overflow: hidden;
            color: #1E88C7;
            text-decoration: none;
            text-indent: 0;
            line-height: 20px;
            width: 100px;
            text-align: center;
        }

        .file input {
            position: absolute;
            font-size: 100px;
            right: 0;
            top: 0;
            opacity: 0;
        }

        .file:hover {
            background: #AADFFD;
            border-color: #78C3F3;
            color: #004974;
            text-decoration: none;
        }

        .pgweb-content li {
            margin-bottom: 25px;
        }
    </style>
</head>
<body>

<div class="pgweb-content floatRight">
    <li class="paddingBottom20">
        <input type="radio" name="chargeType" id="1" class="verticalMiddle" value="1"/>
        <label for="1" class="paddingLeft5 marginRight20">三证合一企业</label>
        <input type="radio" checked name="chargeType" id="2" class="verticalMiddle" value="2"/>
        <label for="2" class="paddingLeft5 marginRight20">五证企业</label>
    </li>
    <form name="manageForm" id="manageForm" method="post" action="${ctx}/security/document/nextRegister.shtml">
        <ul>
            <li class="fix">
                <div class="floatLeft">
                    <span class="zoom width160 textRight">营业执照：</span>
                    <a href="javascript:;" class="file">选择文件
                        <input type="file" name="businessLicense" id="businessLicense">
                    </a>
                    <span class="zoom textLeft" id="businessLicenseSpan" style="display:none">
										<img src="${user.imgUrl}" id="businessLicenseImg"
                                             style="cursor: pointer;width: 100px; height: 50px;">
										<a href="javascript:;" class="deleteBtn">删除</a>
									</span>
                    <span class="asterisk">*</span>
                </div>
                <div class="floatLeft">
                    <span id="businessLicenseTip"></span>
                </div>
            </li>
            <li>
                <div>
                    <input type="text" id="hello"><span class="asterisk">*</span>
                </div>
                <div class="floatLeft">
                    <span id="helloTip"></span>
                </div>
            </li>
            <li class="fix">
                    <button class="btn-1 submitBtn" type="button">提交</button>
            </li>
        </ul>
    </form>
    <input type="hidden" value="${custId}" id="custId">
    <input type="hidden" value="${ctx}" id="ctx">
</div>
<div id="errMsgdialog">
    <div id="errmsg"></div>
</div>
<div id="outerdiv"
     style="position:fixed;top:0;left:0;background:rgba(0,0,0,0.7);z-index:999;width:100%;height:100%;display:none;">
    <div id="innerdiv" style="position:absolute;">
        <img id="bigimg" style="border:5px solid #fff;" src=""/>
    </div>
</div>
<script src="/javascripts/jquery-1.12.4.js"></script>
<script src="https://cdn.bootcss.com/jquery-browser/0.1.0/jquery.browser.js"></script>
<script type="text/javascript" src="/javascripts/formvalidator4.1.3/formValidator-4.1.3.js"></script>
<script type="text/javascript" src="https://cdn.bootcss.com/exif-js/2.3.0/exif.js"></script>
<script type="text/javascript" src="/javascripts/cert5.js"></script>
</body>
</html>