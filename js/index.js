/**
 * Created by jo.chan on 2017/9/7.
 */

//受邀请人升级奖励 正确的
var inviteData1 = [
    {
        pic: ['img/40/40-1.png', 'img/40/40-2.png', 'img/40/40-3.png'],
        desc: ['Batman*1', 'Phiếu trang bị liên server Cam*4', 'Thẻ Đỏ Vạn Năng*5'],
        point: ['LV40'],
        bottom: ['66'],
        left: ['18']
    },
    {
        pic: ['img/60/60-1.png', 'img/60/60-2.png', 'img/60/60-3.png'],
        desc: ['Âu Cơ*1', 'Phiếu trang bị thượng cổ Cam*4', 'Thẻ Đỏ Vạn Năng*5'],
        point: ['LV60'],
        bottom: ['66'],
        left: ['31']
    },
    {
        pic: ['img/80/80-1.png', 'img/80/80-2.png', 'img/80/80-3.png'],
        desc: ['Saitama*1', 'Phiếu trang bị loạn đấu Cam*4', 'Thẻ Đỏ Vạn Năng*5'],
        point: ['LV80'],
        bottom: ['66'],
        left: ['42']
    },
    //todo
    {
        pic: ['img/110/110-1.png', 'img/110/110-2.png', 'img/160/nothing.png'],
        desc: ['Túy Cốt Cầu*1', 'Rương vật liệu Pháp Bảo*10', ' '],
        point: ['LV110'],
        bottom: ['66'],
        left: ['57']
    },
    {
        pic: ['img/160/160-1.png', 'img/160/160-2.png', 'img/160/nothing.png'],
        desc: ['Black*1', 'Rương vật liệu Pháp Bảo*10', ' '],
        point: ['LV160'],
        bottom: ['66'],
        left: ['69']
    }
];

//受邀请人充值奖励 正确的
var inviteData2 = [
    {
        pic: ['img/1000/1000-1.png', 'img/1000/1000-2.png', 'img/1000/1000-3.png'],
        desc: ['Xu*1000', 'Rìu Cang Kim*1', 'Phiếu Chu Tước cam*1'],
        point: ['1000'],
        bottom: ['37'],
        left: ['-3']
    },
    {
        pic: ['img/5000/5000-1.png', 'img/5000/5000-2.png', 'img/5000/5000-3.png'],
        desc: ['Xu*5000', 'Túy Cốt Cầu*1', 'Phiếu Chu Tước đỏ*1'],
        point: ['5000'],
        bottom: ['37'],
        left: ['9']
    },
    {
        pic: ['img/10000/10000-1.png', 'img/10000/10000-2.png', 'img/10000/10000-3.png'],
        desc: ['Xu*10000', 'Phong Hỏa Luân*1', 'Phiếu Anh Hồn đỏ*1'],
        point: ['10000'],
        bottom: ['37'],
        left: ['21']
    },
    {
        pic: ['img/30000/30000-1.png', 'img/30000/30000-2.png', 'img/30000/30000-3.png'],
        desc: ['Xu*10000', 'Natsu*1', 'Gray*1'],
        point: ['30000'],
        bottom: ['37'],
        left: ['32']
    },
    {
        pic: ['img/50000/50000-1.png', 'img/50000/50000-2.png', 'img/50000/50000-3.png'],
        desc: ['Xu*10000', 'Kaio*1', 'Thunderbird*1'],
        point: ['50000'],
        bottom: ['37'],
        left: ['44']
    },
    {
        pic: ['img/70000/70000-1.png', 'img/70000/70000-2.png', 'img/70000/70000-3.png'],
        desc: ['Xu*10000', 'Boa Hancock*1', 'Ma Nhân*1'],
        point: ['70000'],
        bottom: ['37'],
        left: ['56']
    },
    {
        pic: ['img/100000/100000-1.png', 'img/100000/100000-2.png', 'img/100000/100000-3.png'],
        desc: ['Xu*20000', 'Black*1', 'Uchiha*1'],
        point: ['100000'],
        bottom: ['37'],
        left: ['69']
    }];

//东道主收益奖励 正确的11
var ddzData1 = [
    {
        pic: ['img/invite/public/1000-1.png', 'img/invite/public/1000-2.png', 'img/invite/public/1000-3.png'],
        desc: ['Đá Vận Mệnh-Siêu*100', 'Đá Rèn-Cao*200', 'Xu*200'],
        point: ['LV40'],
        bottom: ['38'],
        left: ['17']
    },
    {
        pic: ['img/invite/public/1000-1.png', 'img/invite/public/1000-2.png', 'img/invite/public/1000-3.png'],
        desc: ['Đá Vận Mệnh-Siêu*200', 'Đá Rèn-Cao*300', 'Xu*200'],
        point: ['LV60'],
        bottom: ['38'],
        left: ['31']
    },
    {
        pic: ['img/invite/public/1000-1.png', 'img/invite/public/1000-2.png', 'img/invite/public/1000-3.png'],
        desc: ['Đá Vận Mệnh-Siêu*300', 'Đá Rèn-Cao*400', 'Xu*200'],
        point: ['LV80'],
        bottom: ['38'],
        left: ['42']
    },
    {
        //todo
        pic: ['img/invite/110/110-1.png', 'img/invite/110/110-2.png', 'img/160/nothing.png'],
        desc: ['Túy Cốt Cầu*1', 'Rương vật liệu Pháp Bảo*10', ''],
        point: ['LV110'],
        bottom: ['38'],
        left: ['54']
    },
    {
        //todo
        pic: ['img/invite/160/160-1.png', 'img/invite/160/160-2.png', 'img/160/nothing.png'],
        desc: ['Phong Hỏa Luân*1', 'Rương vật liệu Pháp Bảo*10', ' '],
        point: ['LV160'],
        bottom: ['38'],
        left: ['69']
    }
];

//东道主收益奖励 正确的
var ddzData2 = [
    {
        pic: ['img/invite/1000/1000-1.png', 'img/invite/1000/1000-2.png', 'img/invite/1000/1000-3.png'],
        desc: ['Rìu Cang Kim*1', 'Rương vật liệu Pháp Bảo*5', 'Đá Vận Mệnh-Siêu*50'],
        point: ['1000'],
        bottom: ['-14'],
        left: ['-3']
    },
    {
        pic: ['img/invite/public2/p-1.png', 'img/invite/public2/p-2.png', 'img/invite/public2/p-3.png'],
        desc: ['Mảnh Black*5', 'Phiếu trang bị Chu Tước cam*1', 'Đá Vận Mệnh-Siêu*80'],
        point: ['5000'],
        bottom: ['-14'],
        left: ['9']
    },
    {
        pic: ['img/invite/public2/p-1.png', 'img/invite/public2/p-2.png', 'img/invite/public2/p-3.png'],
        desc: ['Mảnh Black*5', 'Phiếu trang bị Chu Tước cam*2', 'Đá Vận Mệnh-Siêu*100'],
        point: ['10000'],
        bottom: ['-14'],
        left: ['20']
    },
    {
        pic: ['img/invite/public2/p-1.png', 'img/invite/public2/p-2.png', 'img/invite/public2/p-3.png'],
        desc: ['Mảnh Black*5', 'Phiếu trang bị Chu Tước cam*2', 'Đá Vận Mệnh-Siêu*120'],
        point: ['30000'],
        bottom: ['-14'],
        left: ['32']
    },
    {
        pic: ['img/invite/public2/p-1.png', 'img/invite/public2/p-2.png', 'img/invite/public2/p-3.png'],
        desc: ['Mảnh Black*5', 'Phiếu trang bị Chu Tước cam*2', 'Đá Vận Mệnh-Siêu*150'],
        point: ['50000'],
        bottom: ['-14'],
        left: ['44']
    },
    {
        pic: ['img/invite/public2/p-1.png', 'img/invite/public2/p-2.png', 'img/invite/public2/p-3.png'],
        desc: ['Mảnh Black*10', 'Phiếu trang bị Chu Tước cam*2', 'Đá Vận Mệnh-Siêu*180'],
        point: ['70000'],
        bottom: ['-14'],
        left: ['57']
    },
    {
        pic: ['img/invite/100000/100000-1.png', 'img/invite/100000/100000-2.png', 'img/invite/100000/100000-3.png'],
        desc: ['Mảnh Black*10', 'Phong Hỏa Luân*1', 'Rương vật liệu Pháp Bảo*10'],
        point: ['100000'],
        bottom: ['-14'],
        left: ['68']
    }
];

var fbshare = [
    {
        desc: ['Zoro*1', 'Đá Vận Mệnh-Siêu*200', 'Thẻ Đỏ Vạn Năng*5'],
        point: [1000],
        bottom: ['16'],
        left: ['2'],
        pic: ['img/fbshare/1000-1.png', 'img/fbshare/1000-2.png', 'img/fbshare/1000-3.png']
    },
    {
        desc: ['Sesshoumaru*1', 'Đá Rèn-Cao*400', 'Thẻ Vàng Vạn Năng*5'],
        point: [2000],
        bottom: ['16'],
        left: ['32'],
        pic: ['img/fbshare/2000-1.png', 'img/fbshare/2000-2.png', 'img/fbshare/2000-3.png']
    },
    {
        desc: ['Thủy Tinh*1', 'Rìu Cang Kim*1', 'Rương vật liệu Pháp Bảo*10'],
        point: [3000],
        bottom: ['16'],
        left: ['60'],
        pic: ['img/fbshare/3000-1.png', 'img/fbshare/3000-2.png', 'img/fbshare/3000-3.png']
    }
];

function eachPicdd(data) {
    $('.tip-img-dd').each(function (index) {
        $(this).find("img").attr('src', data.pic[index]);
        $(this).find("p").text(data.desc[index]);
        $('.tip-lv').text(data.point[0]);
        $(".award-box-1").css('bottom', data.bottom[0] + "%");
        $(".award-box-1").css('left', data.left[0] + "%");
        $(".award-box-1").show();
    });
}

function eachPicsy(data) {
    $('.tip-img-sy').each(function (index) {
        $(this).find("img").attr('src', data.pic[index]);
        $(this).find("p").text(data.desc[index]);
        $('.tip-lv').text(data.point[0]);
        $(".award-box-2").css('bottom', data.bottom[0] + "%");
        $(".award-box-2").css('left', data.left[0] + "%");
        $(".award-box-2").show();
    });
}


var alertFBPic = function (e) {
    var data = fbshare[e];
    eachPicsy(data);
};

var alertddzData1 = function (e) {
    var data = ddzData1[e];
    eachPicdd(data);
};


var alertddzData2 = function (e) {
    var data = ddzData2[e];
    eachPicdd(data);
};


var alertInviteData1 = function (e) {
    var data = inviteData1[e];
    eachPicsy(data);
};


var alertInviteData2 = function (e) {
    var data = inviteData2[e];
    eachPicsy(data);
};

$(".ddz-box-1 ul li").mouseenter(function () {
    var num = $(this).attr('data-num');
    alertddzData1(num);
});

$("ul li").mouseleave(function () {
    $(".award-box-1").hide();
    $(".award-box-2").hide();
});


$(".ddz-box-2 ul li").mouseenter(function () {
    var num = $(this).attr('data-num');
    alertddzData2(num);
});

//受邀者
$(".syr-box-1 ul li").mouseenter(function () {
    var num = $(this).attr('data-num');
    alertInviteData1(num);
});

$(".syr-box-2 ul li").mouseenter(function () {
    var num = $(this).attr('data-num');
    alertInviteData2(num);
});


$(".level-box-3 ul li").mouseenter(function () {
    var num = $(this).attr('data-num');
    alertFBPic(num);
});


$(".level-box ul li").mouseout(function () {
    $(".award-box").hide();
});


$(".btn-close").on("click", function () {
    $(".black-bg").hide();
    $(".box").hide();
});


$(window).scroll(function () {
    t = $(document).scrollTop();
    //if scroll height
    if (t > 900 && t < 2500) {
        $('.nav-box a').removeClass('active');
        $('.nav-box a').eq(0).addClass('active');
    }
    else if (t > 2500 && t < 4400) {
        $('.nav-box a').removeClass('active');
        $('.nav-box a').eq(1).addClass('active');
    }
    else if (t > 4400 && t < 5000) {
        $('.nav-box a').removeClass('active');
        $('.nav-box a').eq(4).addClass('active');
    }
    else if (t > 0 && t < 500) {
        $('.nav-box a').removeClass('active');
        $('.nav-box a').eq(3).addClass('active');
    }
});


$(".nav-box a").on("click", function () {
    $(".nav-box a").removeClass('active');
    var id = $(this).attr("data-id");
    $("html,body").animate({scrollTop: $(id).offset().top}, 800);
    $(this).addClass('active');
});





