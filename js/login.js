var pg_config = {
    status: {
        404: 'param_is_null',
        405: 'activity_not_find',
        402: 'Event kết thúc',
        401: 'Event chưa bắt đầu',
        444: 'Level chưa đạt',
        200: 'Success',
        406: 'Chưa kết nối nhân vật',
        442: 'Mã invite vô hiệu',
        441: "Đã trở thành Chủ",
        400: "Đã trở thành người được mời!",
        443: "Đã trở thành người được mời!",
        445: "Mã code đã liên kết hơn 5 người, không thể dùng nữa"
    },
    fb_app_id: 311294709063394,
    fb_redirect_uri: 'http://sieuanhhung.pocketgamesol.com/invite',
    // fb_redirect_uri: 'http://10.10.12.40:8020/oldBacker/index.html',
    // api_url: 'http://10.10.3.144:8081',
    fb_login_url: 'http://52.221.145.234:8081/user/fb/login',
    api_url: 'http://52.221.145.234:8081'
};


var actId = '1efadfbf-dde5-4e3d-843d-21958156fe22',
    groupId = '3d44e6c2-9c6d-4e6c-a904-94b7cade19d6',
    appId = 10002;

$(document).ready(function () {
    if (isLogin()) {
        joinActivity();
        showMessage();
    } else {
        checkFBLogin();
    }
});

$('.btn-login').on('click', function () {
    var username = $(".username").val();
    var password = md5($(".password").val());
    var url = pg_config.api_url + "/user/sdk/login";
    if (username == "" || password == "") {
        $(".login-tip").show();
        $(".login-tip").text("Nhập tài khoản và mật khẩu chính xác");
        return;
    }
    $.ajax({
        type: "GET",
        url: url,
        data: {
            userName: username,
            password: password,
            version: 'v3'
        },
        beforeSend: function () {
            $(".loadingBtn").show();
        },
        success: function (result) {
            $(".loadingBtn").hide();
            handleLogin(result);
        },
        error: function (error) {
            console.log(error);
        }
    });
});

function checkFBLogin() {
    var FB_CODE = $.trim(getParameterByName("code"));
    if (FB_CODE == "") {
        return;
    }
    var requestURL = pg_config.fb_login_url;
    $.ajax({
        type: "GET",
        async: true,
        url: requestURL,
        data: {
            clientId: appId,
            redirectUrl: pg_config.fb_redirect_uri,
            code: FB_CODE
        },
        beforeSend: function () {
            $(".loadingBtn").show();
        },
        success: function (result) {
            $(".loadingBtn").hide();
            handleLogin(result);
        },
        error: function (err) {
            console.log(err);
        }
    });
}


$('.fbBtn').on('click', function () {
    sessionStorage.setItem('facebook', 1);
    var random = Math.random() * 1000;
    var loginURL = "https://www.facebook.com/v2.6/dialog/oauth?client_id=" + pg_config.fb_app_id
        + "&redirect_uri=" + encodeURIComponent(pg_config.fb_redirect_uri) + "&r=" + random;
    window.location.href = loginURL;
});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};


function handleLogin(result) {
    if (result.code == 200) {
        localStorage.setItem('userId', result.state.userId);
        localStorage.setItem('username', result.state.userName);
        localStorage.setItem('token', result.state.token);
        var myTimer = new Date().getTime();
        localStorage.activetime = myTimer;
        hideLogin();
        showChannel();
        loadGameZones();
        showMessage();
        if (localStorage.facebook == 1) {
            window.location.href = pg_config.fb_redirect_uri;
        }
    } else {
        $(".login-tip").show();
        $(".login-tip").text(pg_config.status[result.code]);
    }
}

/**
 * load GameZones
 */
function loadGameZones() {
    var zones = localStorage.getItem("zones");
    if (zones && zones.length > 2) {
        var data = JSON.parse(zones);
        setZones(data)
    } else {
        var url = pg_config.api_url + '/user/sdk/zones';
        $.ajax({
            type: "GET",
            async: false,
            data: {
                appId: appId,
                token: localStorage.token
            },
            url: url,
            success: function (result) {
                if (result.code == 200) {
                    if (result.state == '') {
                        $(".tip").show();
                        $(".tip").text("Chọn server có nhân vật");
                    }
                    else {
                        $(".tip").hide();
                        setZones(result.state);
                        localStorage.setItem("zones", JSON.stringify(result.state));
                    }
                } else {
                    alert(pg_config.status[result.code]);
                }
            },
            error: function (err) {
                console.log(JSON.stringify(err));
            }
        });
    }
}

function setZones(data) {
    var list = data;
    var openList = [];
    for (var i = 0; i < list.length; i++) {
        openList.push(list[i]);
    }
    recentGameZones(openList);
}


/**
 * load Player
 */
function loadPlayer() {
    var url = pg_config.api_url + '/user/player/list';
    localStorage.ZoneId = $(".zoneSelect").val();
    $.ajax({
        url: url,
        type: "GET",
        data: {
            appId: appId,
            gameZoneId: localStorage.ZoneId,
            token: localStorage.token
        },
        success: function (result) {
            if (result.code == 200) {
                var data = result.state[0];
                if (result.state == '') {
                    localStorage.removeItem("playerId");
                    localStorage.removeItem("playerName");
                    $(".tip").show();
                    $(".tip").text("Chọn server có nhân vật");
                }
                else {
                    localStorage.setItem("playerId", data.playerId);
                    localStorage.setItem("playerName", data.playerName);
                    $(".tip").hide("");
                }
            }
            else {
                $(".tip").show();
                $(".tip").text(pg_config.status[result.code]);
            }
        },
        error: function (err) {
            console.log(JSON.stringify(err));
        }
    });
}

/**
 * select list
 * @param list
 */
var recentGameZones = function (list) {
    var dom = '<option selected="selected">Chọn server</option>',
        zoneList = null;
    $(".zoneSelect").empty();
    for (var i = 0; i < list.length; i++) {
        zoneList = list[i];
        dom += '<option value="' + zoneList.gameZoneId + '" data-localName="' + zoneList.localName + '">' + zoneList.localName + '</option>';
    }
    $(".zoneSelect").append(dom);
};

$(".zoneSelect").change(function () {
    localStorage.gamePlayer = $('.zoneSelect option:selected').text();
    loadPlayer();
});

function isLogin() {
    if (localStorage.userId && localStorage.token) {
        var active = new Date().getTime();
        active -= 3000000;
        if (active < parseInt(localStorage.activetime)) {
            return true;
        } else {
            localStorage.username = "";
            localStorage.token = "";
            return false;
        }
    } else {
        return false;
    }
}

function isChoose() {
    if (localStorage.playerId) {
        {
            return true;
        }
    } else {
        return false;
    }
}

function joinActivity() {
    var joinUrl = pg_config.api_url + "/activity/join";
    $.ajax({
        url: joinUrl,
        type: "GET",
        data: {
            actId: actId,
            groupId: groupId,
            token: localStorage.token
        },
        success: function (result) {
            if (result.code == 200) {
                //东道主
                $(".invite-word").text("mã invite");
                $(".invite-btn").hide();
                if (typeof(result.state.playerList) !== "undefined") {
                    var obj = (result.state.playerList);
                    console.log(obj.length);
                    $(".invite-desc").text("Bạn đã mời  " + result.state.playerList.length + "  bạn").show();
                } else {
                    $(".invite-desc").text("Bạn đã mời  " + 0 + "  bạn").show();
                }
                $(".codeInput").val(result.state.invitationCode);
                localStorage.setItem("invitationCode", result.state.invitationCode);
                $(".codeInput").attr('readonly', true);
            }
            else if (result.code == 443) {
                console.log(pg_config.status[result.code]);
                $(".codeInput").val(result.state);
                pulicPic();
                $(".codeInput").attr('readonly', true);
            }
            else if (result.code == 444) {
                $(".invite-word").text("mã invite");
                $(".invite-desc").text("Bạn đã mời  " + 0 + "  bạn").show();
                $(".invite-btn").hide();
                $(".codeInput").val(pg_config.status[result.code]);
                $(".codeInput").attr('readonly', true);
            }
            else {
                console.log(pg_config.status[result.code]);
            }
        },
        error: function (err) {
            console.log(JSON.stringify(err));
        }
    });
}


//绑定成功
$(".invite-btn").on("click", function () {
    if (isLogin() && isChoose()) {
        var joinUrl = pg_config.api_url + "/activity/join";
        var invitationCode = $(".codeInput").val();
        $.ajax({
            url: joinUrl,
            type: "GET",
            data: {
                actId: actId,
                groupId: groupId,
                token: localStorage.token,
                invitationCode: invitationCode
            },
            success: function (result) {
                if (result.code == 200) {
                    console.log(result.state);
                    tip("Kết nối mã invite thành công");
                    $(".codeInput").val(result.state.invitationCode);
                    $(".codeInput").attr('readonly', true);
                }
                else {
                    tip(pg_config.status[result.code]);
                    $(".codeInput").attr('readonly', true);
                }
            },
            error: function (err) {
                console.log(JSON.stringify(err));
            }
        });
    } else {
        showLogin();
    }
});

function pulicPic() {
    $(".invite-word").text("Nhập mã invite");
    $(".invite-desc").empty().hide();
    $(".invite-btn").show();
}

$(".btn-close-2").on("click", function () {
    saveInfo();
});


$(".channel-login ").on("click", function () {
    saveInfo();
});

function saveInfo() {
    if (isLogin() && isChoose()) {
        $(".black-bg").hide();
        $(".choose-form").hide();
        showMessage();
        joinActivity();
    }
    else {
        $(".tip").show();
        $(".tip").text("Chọn server có nhân vật");
    }
}

function showMessage() {
    $(".user-playerName").html("Tên nhân vật:" + localStorage.getItem("playerName"));
    $(".user-id").html("ID nhân vật:" + localStorage.getItem("playerId"));
    $(".user-qf").html("Server:" + localStorage.gamePlayer);
    $(".line").show();
    $(".userMessage").show();
    $(".loginBtn").hide();
    $(".initBtn").show();
}

function showChannel() {
    $(".black-bg").show();
    $(".choose-form").show();
}

function showLogin() {
    $(".black-bg").show();
    $('.login-form').show();
}

function hideLogin() {
    $(".black-bg").hide();
    $('.login-form').hide();
}

function loading() {
    $(".black-bg").show();
    $(".loading").show();
}

function hideLoading() {
    $(".black-bg").hide();
    $(".loading").hide();
}

function tip(html) {
    $(".black-bg").show();
    $(".tip-box").show();
    $(".tishi").text(html);
}

//选择区服
$(".changeQf").click(function () {
    showChannel();
    loadGameZones();
});



$(".loginBtn").on("click", function () {
    showLogin();
});


//注销
$('.initBtn').on('click', function () {
    localStorage.clear();
    $(".user-playerName").text("");
    $('.user-qf').text("");
    $('.user-id').text("");
    $(".zoneSelect").empty();
    $('.userMessage').hide();
    $('.line').hide();
    showLogin();
    $(".initBtn").show();
    $(".loginBtn").hide();
    $(".invite-desc").empty().hide();
    $(".codeInput").val('');
    $(".codeInput").attr('readonly', true);
});
