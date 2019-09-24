/**
 * Created by devil-love on 2019/2/18.
 */
$(function () {
    $(".container").fullpage({
        //��ÿ��ҳ�����ñ�����ɫ
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        //ȡ�����ݵ�Ĭ�Ͼ���
        verticalCentered: false,
        //��ʾ�Ҳ���Ŀ����
        navigation: true,
        //������һ��ҳ���ʱ��ִ�ж�����
        afterLoad: function (link, index) {
            $(".section").eq(index - 1).addClass("now");
        },
        //ͨ���Զ����װ����ʵ�ֵ��ͼƬ�����¸�ҳ�湦�ܣ�������¼�����Ŀ������ϵ����
        afterRender: function () {
            $(".more").on("click", function () {
                $.fn.fullpage.moveSectionDown();   //�����fullpage���治�ü�()
            });
            //�������ջ���ַ������ʾ�Ĵ���
            $(function () {
                $(".screen04 .cart").on("animationend",function () {
                    $(".screen04 .address").delay(400).fadeIn(1000).children(1).delay(400).fadeIn(2000);
                    $(".screen04 .text").addClass("show");
                })
            });
            //ͼƬ������궯
            $(".screen08").on("mousemove",function(e){
               $(this).find(".hand").css({
                   left: e.clientX-320,
                    top: e.clientY-200 })
               });
            $(".screen08").find(".again").on("click",function(){
                    /*�Ƴ���ǰ�Ѿ������������¼�������*/
                    $(".now,.leaved,.show").removeClass("now").removeClass("leaved").removeClass("show");
                    $(".content [style]").removeAttr("style");
                    /*��ת����һҳ�����¿�ʼ*/
                    $.fn.fullpage.moveTo(1);
            });
        },
        //�뿪��ǰҳ���ͬʱ��������
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3) {   //�뿪�ڶ�ҳ������ҳ������
                $(".section").eq(index - 1).addClass("leaved");
            } else if (index == 3 && nextIndex == 4) {  //����ҳ������ҳ
                $(".section").eq(index - 1).addClass("leaved");
            }else if(index==5&&nextIndex==6){
                $(".section").eq(index-1).addClass("leaved");
                $(".screen06 .box").addClass("show");
            }else if(index==6&&nextIndex==7){
                $(".screen07 .star").addClass("show");
                $(".screen07 .text").addClass("show");
            }
        },
    });
});
