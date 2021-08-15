//메인팝업
$(".main-pop-close").on("click",function(){
    $(".main-popup").hide();
})

//이미지 슬라이드쇼
const circleList = Array.from(document.querySelectorAll('.circle-list>li'));

let slideIndex = 0;
let isSlidePause = false;

//일정시간마다 슬라이드쇼
let playSlide = setInterval(slideInterval,2000);

function slideInterval(){
    if(slideIndex == 2){slideIndex=0;}else{slideIndex++;}
    changeSlideIndex(slideIndex);
}

//버튼 클릭 시 이미지 슬라이드 이동
function changeSlideIndex(num){
    slideIndex = num;
    $(".img-list").css("left",(slideIndex*-1280)+"px");
    circleList.forEach(e=>e.classList.remove("current"));
    circleList[slideIndex].classList.add("current");
}

//슬라이드쇼 멈춤,시작 버튼
function slidePause(){
    if(isSlidePause == false){
        clearInterval(playSlide);
        isSlidePause=true;
        $(".play-stop").css("background","url(img/play.svg)");
    }else{
        isSlidePause = false;
        playSlide = setInterval(slideInterval,2000);
        $(".play-stop").css("background","url(img/pause.svg)");
    }
}
$(".play-stop").on("click",slidePause);

//메인의 content2 중, brandstory-box에 마우스를 올릴 경우
const brandstoryBox = Array.from(document.getElementsByClassName("brandstory-box"));
const brandstoryExplBox = Array.from(document.getElementsByClassName("brandstory-expl-box"));
brandstoryBox.forEach(function(e,i){
    e.addEventListener("mouseover",function(){
        brandstoryExplBox[i].style.transform = "rotateX(0deg)";
    })
    e.addEventListener("mouseout",function(){
        brandstoryExplBox[i].style.transform = "rotateX(-90deg)";
    })
})

//=========================================================//
//=========================================================//
//=========================================================//

//메인, 서브 페이지 display 전환
function changePage(num1,num2){
    changeFoodTab(1);   //메뉴소개의 첫 번째 탭의 "신메뉴"탭이 늘 뜨도록
    changeCardTab(1);//할인/상품권의 두 번째 탭의 "제휴카드"탭이 늘 뜨도록
    changeEventTab(1);//할인/상품권의 두 번째 탭의 "제휴카드"탭이 늘 뜨도록
    atMain.style.display = "none";
    $(".at").hide();
    $(".sub-wrap").hide();
    $("#at"+num1).show();
    $("#sub-wrap"+num1+"-"+num2).show();
}

//=========================================================//
//=========================================================//
//=========================================================//

//메뉴소개의 "별미국수 요리"의 탭 전환
function changeFoodTab(num){
    for(let i=1; i<5; i++){
        $("#sub-body-food-wrap"+i).hide();
    }
    $("#sub-body-food-wrap"+num).show();
}

//메뉴소개의 "원산지 안내"버튼 클릭
function originOpen(){
    $(".food-origin-pop").css("display","block");
}
function originClose(){
    $(".food-origin-pop").css("display","none");
}
$(".food-origin-btn").on("click",originOpen);
$(".origin-pop-close").on('click',originClose);

//메뉴소개의 각 음식들을 클릭할 경우의 팝업
//배열
const foodNameArr = ["제일우동",
                     "제일국수",
                     "소불고기 우동",
                     "우삼겹 비빔국수",
                     "수제 돈까스",
                     "소불고기 달걀덮밥","주꾸미 삼겹살덮밥","참치","불고기","알톡톡(구운명란)","스팸","새우튀김(3pcs)","매콤순살닭튀김(小)","씨앗닭강정(小)","새우강정(小)","녹두전","바삭감자전","씨앗닭강정","주꾸미우삼겹볶음","모둠 우동 전골","한우 국수 전골","얼큰 왕만두 전골"]; //22개
const foodengNameArr =["Udon Noodles",
                       "Korean traditional noodles",
                       "Beef Bulgogi Udon",
                       "Cold noodles with beef loin and mixture of red pepper sauce",
                       "HandMade Pork Cutlet",
                       "Bulgogi Rice",
                       "Rice with Spicy Webfoot Octopus & Pork Belly","Tuna","Bulgogi","Roe","Spam","Prawn Fries","Deep Fried Spicy Chicken","Sweet and Sour Chicken","Spicy and Sour Fried Shrimp with Fried Wild Chive","Mung Bean Pancake and Seasoned Spring Wild Chives","Crispy Potato Pancackes","Sweet and Sour Chicken with Seed","Stir-fried Webfoot Octopus and Beef Loin","Assored Udon Hot Pot","Korean Beef and Noodle Hot Pot","Spicy king Dumpling Hot Pot"];
const foodcontArr =[
    "엄선된 다시마와 훈연 가다랑어포 등으로 매일 아침 정성껏 우려내어 깊고 풍부한 국물과 유부 고명을 함께 맛 볼 수 있는 메뉴",
    "남해 멸치로 우려내어 개운하고 담백한 국물과 오방색으로 어우러진 고명을 곁들여 함께 맛 볼 수 있는 메뉴",
    "매일 아침 정성껏 우려낸 우동 육수와 불향 가득 소불고기, 부드러운 수란을 함께 맛 볼 수 있는 별미 우동",
    "센 불에서 볶아내 육즙과 불향 가득한 우삼겹을 듬뿍 올린 새콤달콤한 비빔국수",
    "허브소스에 숙성시킨 등심을 셰프가 손수 정성껏 만들어 더욱 바삭한 정통 수제 돈까스",
                    "달콤하게 양념해 볶은 소불고기와 부드럽게 익힌 달걀을 밥과 함께 떠먹는 덮밥 메뉴","매콤한 양념에 쫄깃함 주꾸미와 고소한 삼겹살, 아삭한 채소를 함께 잘 볶아낸 덮밥 메뉴","참치 수제 주먹밥","불고기 수제 주먹밥","알톡톡(구운 명란) 주먹밥","스팸 주먹밥","새우튀김 3조각","매콤순살닭튀김(小)","씨앗닭강정(小)","새우강정(小)","녹두와 김치, 숙주, 돼지고기, 양파 등 다양한 재료로 만든 반죽으로 부쳐내 면과 잘 어울리는 도톰한 녹두전.봄 제철 달래무침과 함께 더욱 향긋하게 즐기세요!","얇게 채친 감자와 고구마를 바삭하게 부친 후 고소한 수란과 그라나파다노 치즈를 올린 별미 메뉴","바삭하게 튀긴 닭고기와 호박씨 그리고 마늘쫑에 달콤한 강정소스를 넣어 버무린 별미 닭강정","불맛나게 구워 술 안주로 제격인 주꾸미와 우삼겹 볶음","깊은 맛을 자랑하는 제일 육수에 야채와 고기 새우튀김과 탱글탱글한 자가제면 우동면을 한번에 즐길 수 있는 메뉴","제일제면소 특제 육수에 다양한 채소, 버섯과 고소하고 꼬들꼬들한 식감의 한우 차돌박이를 넣어서 즐기는 얼큰한 국수전골","속이 꽉 찬 비비고 왕만두와 각정 버섯, 신선한 채소가 얼큰한 육수에 어우러진 일품 전골 메뉴"];
//음식li배열
const foodList = Array.from(document.querySelectorAll(".food-list>li"));

function foodPopOpen(num){
    let num2 = num+1;
    $(".food-pop").show();
    $(".food-pop-img").css("background","url(img/foodmenu"+num2+".png) 0% 50% no-repeat").css("background-size","cover");
    $(".food-pop>h1").html(foodNameArr[num]);
    $(".food-pop>h4").html(foodengNameArr[num]);
    $(".food-pop>p").html(foodcontArr[num]);
}
function foodPopClose(){
    $(".food-pop").hide();
}
foodList.forEach(function(e,i){
    e.addEventListener('click',function(){
        foodPopOpen(i);
    });
});
//음식 팝업닫기
$(".food-pop-close").on('click',foodPopClose);


//=========================================================//
//=========================================================//
//=========================================================//

//매장찾기
//매장의 이름, 주소, 번호,회전식 샤브샤브 지원 여부 배열 넣기
const shopNameArr = ["올림픽공원점",
                     "N서울타워점",
                     "코엑스몰점",
                     "서울역사점","용산역사점","양재 하나로점","청량리역사점","서울스퀘어점","여의도 IFC점","푸드월드 인천공항점","제일제당센터점"];
const shopAddressArr = ["서울특별시 송파구 올림픽로 424(방이동)",
                        "서울특별시 용산구 남산공원길 105 서울타워",
                        "서울특별시 강남구 봉은사로 524 코엑스 H113","서울특별시 중구 한강대로 405 서울역사 3층","서울특별시 용산구 한강대로 23길 55 용산역사","서울특별시 서초구 청계산로 10 양재 하나로클럽 1층","서울특별시 동대문구 왕산로 214, 한화청량리역사 3층","서울특별시 중구 한강대로 416 서울스퀘어 B1층 제일제면소","서울특별시 영등포구 국제금융로 10(여의도동, IFC몰 B3층 309호 일부)","인천광역시 중구 공항로 271,B1층","서울특별시 중구 동호로 330 CJ제일제당 센터 B1층(쌍림동)"];
const shopTelArr=["02-421-8181",
                  "02-318-4146",
                  "02-6002-1018","02-313-1880","02-790-2021","02-3461-7676","02-967-1022","02-6456-8625","02-6137-5280","032-743-7048","02-6740-7999"];
const shopShabuArr=[1,0,0,0,0,0,0,0,1,0,0];
let innerTag ="";
//shop-list-box에 배열의 수 만큼 shop-box 넣기
for(let i=0;i<shopNameArr.length;i++){
    $(".shop-list-box").html(function(){
        
        innerTag += "<li class='shop-box'><h2>"+shopNameArr[i]+"</h2><div class='shop-shabu'><img src='img/shabu-icon.png' alt='회전식샤브샤브 아이콘'></div><p class='shop-address'>"+shopAddressArr[i]+"</p><p class='shop-tel'>"+shopTelArr[i]+"</p><div class='shop-detail'>지도보기</div></li>"
        return innerTag;
    });
}
//회전식 샤브샤브 없는 곳은 display :none으로 변환
for(let i=0;i<shopNameArr.length;i++){
    if(shopShabuArr[i] == 0)
    {
        $(".shop-box").eq(i).children(".shop-shabu").hide();
    }
}
const shop_detail_A=Array.from(document.getElementsByClassName("shop-detail"));
//매장의 이름 클릭 시 지도의 이미지 바뀌기
shop_detail_A.forEach(function(e,i){
    e.addEventListener("click",function(){
        $(".map-box iframe").removeClass();
        $(".map-box iframe").eq(i).addClass("map-show");
    })
})


// 시,도 select박스의 value값에 따라 구, 군의 옵션값이 변하는 이벤트
const gugun_gangwon=["강릉시",
                    "고성군",
                    "동해시",
                    "삼척시",
                    "속초시",
                    "양구군",
                    "양양군"];
const gugun_gyeonggi=["가평군",
                     "고양시 덕양구",
                     "고양시 일산동구",
                     "고양시 일산서구",
                     "과천시",
                     "광명시",
                     "광주시"];
const gugun_gyeongnam=["거제시",
                      "거창군",
                      "고성군",
                      "김해시",
                      "남해군",
                      "밀양시",
                      "사천시"];
const gugun_gyeongbuk=["경산시",
                      "경주시",
                      "고령군",
                      "구미시",
                      "군위군",
                      "김천시",
                      "문경시"];
const gugun_kwangju=["광산구",
                    "남구",
                    "동구",
                    "북구",
                    "서구",];
const gugun_daegu=["남구",
                  "달서구",
                  "달성군",
                  "동구",
                  "북구",
                  "서구",
                  "수성구",
                  "중구"];
const gugun_daejeon=["대덕구",
                    "동구",
                    "서구",
                    "유성구",
                    "중구"];
const gugun_busan=["강서구",
                  "금정구",
                  "기장군",
                  "남구",
                  "동구",
                  "동래구",
                  "부산진구"];
const gugun_seoul=[
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구"    
];
const gugun_ulsan=["남구",
                   "동구",
                   "북구",
                   "울주군",
                   "중구"
];
const gugun_incheon=["강화군",
                    "계양구",
                    "남동구",
                    "동구",
                    "미추홀구",
                    "부평구",
                    "서구"];
const gugun_jeonnam=["강진군",
                   "고흥군",
                   "곡성군",
                   "광양시",
                   "구례군",
                   "나주시",
                   "담양군"];
const gugun_jeonbuk=["고창군",
                    "군산시",
                    "김제시",
                    "남원시",
                    "무주군",
                    "부안군",
                    "순창군"];
const gugun_jeju=[
    "서귀포시",
    "제주시"];
const gugun_chungnam=["계룡시",
                     "공주시",
                     "금산군",
                     "논산시",
                     "당진시",
                     "보령시",
                     "부여군"];
const gugun_chungbuk=["괴산군",
                     "단양군",
                     "보은군",
                     "영동군",
                     "옥천군",
                     "음성군",
                     "제천시"];

let gugun_Str ="";

$(function(){
    $("#si").on("change",function(){
        gugun_Str = "<option value='' selected>구/군</option>";        
        
        if($("#si").val() == "강원도"){ 
            for(let i=0;i<gugun_gangwon.length;i++){
                gugun_Str +="<option value="+gugun_gangwon[i]+">"+gugun_gangwon[i]+"</option>";
            }
        }else if($("#si").val() == "경기도"){ 
            for(let i=0;i<gugun_gyeonggi.length;i++){
                gugun_Str +="<option value="+gugun_gyeonggi[i]+">"+gugun_gyeonggi[i]+"</option>";
            }
        }else if($("#si").val() == "경상남도"){ 
            for(let i=0;i<gugun_gyeongnam.length;i++){
                gugun_Str +="<option value="+gugun_gyeongnam[i]+">"+gugun_gyeongnam[i]+"</option>";
            }
        }else if($("#si").val() == "경상북도"){ 
            for(let i=0;i<gugun_gyeongbuk.length;i++){
                gugun_Str +="<option value="+gugun_gyeongbuk[i]+">"+gugun_gyeongbuk[i]+"</option>";
            }
        }else if($("#si").val() == "광주광역시"){ 
            for(let i=0;i<gugun_kwangju.length;i++){
                gugun_Str +="<option value="+gugun_kwangju[i]+">"+gugun_kwangju[i]+"</option>";
            }
        }else if($("#si").val() == "대구광역시"){ 
            for(let i=0;i<gugun_daegu.length;i++){
                gugun_Str +="<option value="+gugun_daegu[i]+">"+gugun_daegu[i]+"</option>";
            }
        }else if($("#si").val() == "대전광역시"){ 
            for(let i=0;i<gugun_daejeon.length;i++){
                gugun_Str +="<option value="+gugun_daejeon[i]+">"+gugun_daejeon[i]+"</option>";
            }
        }else if($("#si").val() == "부산광역시"){ 
            for(let i=0;i<gugun_busan.length;i++){
                gugun_Str +="<option value="+gugun_busan[i]+">"+gugun_busan[i]+"</option>";
            }
        }else if($("#si").val() == "서울특별시"){ 
            for(let i=0;i<gugun_seoul.length;i++){
                gugun_Str +="<option value="+gugun_seoul[i]+">"+gugun_seoul[i]+"</option>";
            }
        }else if($("#si").val() == "울산광역시"){ 
            for(let i=0;i<gugun_ulsan.length;i++){
                gugun_Str +="<option value="+gugun_ulsan[i]+">"+gugun_ulsan[i]+"</option>";
            }
        }else if($("#si").val() == "인천광역시"){ 
            for(let i=0;i<gugun_incheon.length;i++){
                gugun_Str +="<option value="+gugun_incheon[i]+">"+gugun_incheon[i]+"</option>";
            }
        }else if($("#si").val() == "전라남도"){ 
            for(let i=0;i<gugun_jeonnam.length;i++){
                gugun_Str +="<option value="+gugun_jeonnam[i]+">"+gugun_jeonnam[i]+"</option>";
            }
        }else if($("#si").val() == "전라북도"){ 
            for(let i=0;i<gugun_jeonbuk.length;i++){
                gugun_Str +="<option value="+gugun_jeonbuk[i]+">"+gugun_jeonbuk[i]+"</option>";
            }
        }else if($("#si").val() == "제주특별자치도"){ 
            for(let i=0;i<gugun_jeju.length;i++){
                gugun_Str +="<option value="+gugun_jeju[i]+">"+gugun_jeju[i]+"</option>";
            }
        }else if($("#si").val() == "충청남도"){ 
            for(let i=0;i<gugun_chungnam.length;i++){
                gugun_Str +="<option value="+gugun_chungnam[i]+">"+gugun_chungnam[i]+"</option>";
            }
        }else if($("#si").val() == "충청북도"){ 
            for(let i=0;i<gugun_chungbuk.length;i++){
                gugun_Str +="<option value="+gugun_chungbuk[i]+">"+gugun_chungbuk[i]+"</option>";
            }
        }
        
        //편의상 구/군의 갯수는 7개까지로 한정함
        
        
        $("#gugun").html(gugun_Str);
    })
})

//=========================================================//
//=========================================================//
//=========================================================//

//제휴카드 클릭 이벤트
const cardNameArr = ["신한LOVE·신한LOVE Platinum# 카드 30% 청구할인",
                  "CJ카드(국민, SCBC, 삼성, 시티, 현대M, 신한, 하나, 롯데) 20%할인+2% 적립",
                  "현대카드 M 20%포인트 결제",
                  "CJ ONE제휴카드 (삼성, 신한)15% 할인 + 1%적립(CJ ONE 포인트)",
                  "CJ ONE 하나 체크카드"];
const cardExArr = [
    [
        "- 월 2회, 1회당 할인 전 식사금액 10만원 한도 내",
        "- 신한LOVE Platinum# 카드는 횟수 제한 없음",
        "- 전월 이용 금액에 따른 통합 할인 한도 내에서 적용",
        "- 체크카드는 할인 적용 대상에서 제외"
    ],
    [
        "- 1일 1회 할인 전 식사 금액 20만원 한도 내",
        "- CJ 카드 적립금 사용 가능(단, CJ오쇼핑 회원에 한함)"
    ],
    [
        "- 현대카드 M포인트로 최대 20%까지 결제",
        "- 최소 1,000포인트 이상 시 사용 가능, 연간한도 무제한",
        "- 포인트 한도 내 결제 가능하며, 잔여 포인트 부족 시 잔여 포인트 만큼만 차감"
    ],
    [
        "- 전월(1일~말일) 실적 20만원 이상",
        "- 월 5회(1회 최대 3만원 할인)",
        "- 할인횟수 초과시, 적립 포인트의 2배 적립 (할인한도는 푸드빌 15% 할인 브랜드 합산 기준)",
        "<br>",
        "※ CJ ONE 삼성카드와 CJ ONE 신한카드는 동시에 제휴(할인/포인트 더블 적립) 적용 불가",
        "※ 단, 삼성페이로 결제 시, 제휴 할인만 가능하며 CJ ONE 포인트 더블 적립 혜택 적용 불가"
    ],
    [
        "- CJ ONE 제휴브랜드에서 적립한 포인트의 2개 캐쉬백",
        "- 전월 실적 20만원 이상/1만원 이상 결제 시(월 최대 1만원 캐쉬백) 각 브랜드",
        "- CJ ONE 기본 적립율 기준",
        "- 국내 하나카드 전 가맹점에서 2만원 당 100원 캐쉬백",
        "- 전월 실적 20만원 이상/2배 캐쉬백과 중복 적용"
    ]
];
const cardImgArr = [
    "img/card01.png",
    "img/card02.png",
    "img/card03.png",
    "img/card04.png",
    "img/card05.png"];
const giftImgArr = [
    "img/gift01.png",
    "img/gift02.png",
    "img/gift03.png"];
$("#sub-body-card-wrap1 .card-list li").on("click",function(){
    //선택한 카드 투명도 전환
    $("#sub-body-card-wrap1 .card-list li").removeClass("selected-card");
    $(this).addClass("selected-card");
    
    //선택한 카드 이름 전환
    $(".card-expl-box div:nth-child(2) h1").html(cardNameArr[$(this).index()]);
    
    //선택한 카드 설명 전환
    let cardInnerTag="";
    $(".card-expl-box div:nth-child(2) ul").html(cardInnerTag); //초기화
    for(let i=0; i<cardExArr[$(this).index()].length;i++){
        cardInnerTag+="<li>"+cardExArr[$(this).index()][i]+"</li>";
        $(".card-expl-box div:nth-child(2) ul").html(cardInnerTag);
    }
    
    //선택한 카드 이미지 전환
    $(".card_big_img").attr("src",cardImgArr[$(this).index()]);
});
//상품권 클릭 이벤트
$("#sub-body-card-wrap2 .card-list li").on("click",function(){
    //선택한 카드 투명도 전환
    $("#sub-body-card-wrap2 .card-list li").removeClass("selected-card");
    $(this).addClass("selected-card");
    
    //선택한 상품권 이미지 전환
    $(".gift_big_img").attr("src",giftImgArr[$(this).index()]);
});

//제휴카드/상품권 탭 전환
function changeCardTab(num){
    $("#sub-body-card-wrap1").hide();
    $("#sub-body-card-wrap2").hide();
    
    $("#sub-body-card-wrap"+num).show();
}
//이벤트 진행중/종료된 이벤트 탭 전환
function changeEventTab(num){
    $("#sub-body-event-wrap1").hide();
    $("#sub-body-event-wrap2").hide();
    
    $("#sub-body-event-wrap"+num).show();
}
//기프트카드 마우스 오버 이벤트
$(function(){
    
    $(".gift-hover-box").mouseover(function(){
        $(this).children($(".gift-hover-box img")).css("filter","brightness(1)");
        $(this).children(".gift-pointer-img").css("filter","opacity(0)");
        
        $(this).next().css("transition-delay","0s");
        $(this).next().css("width","600px");
        
        $(this).siblings(".gift-expl-move-box").css("transition-delay","0.3s");
        $(this).siblings(".gift-expl-move-box").css("transform","rotateX(0deg)");
    })
    
    $(".gift-hover-box").mouseout(function(){
        $(this).children($(".gift-hover-box img")).css("filter","brightness(0.5)");
        $(this).children(".gift-pointer-img").css("filter","opacity(1)");
        
        $(this).next().css("transition-delay","0.3s");
        $(this).next().css("width","0px");
        
        $(this).siblings(".gift-expl-move-box").css("transition-delay","0s");
        $(this).siblings(".gift-expl-move-box").css("transform","rotateX(90deg)");
        
    })
})

//=========================================================//
//=========================================================//
//=========================================================//

//새소식 - 매장별 이벤트 슬라이드 업, 다운 이벤트
$(function(){
    $(".shop-event-tree-sub").hide();
    $(".shop-event-tree-title").on("click",function(){
        $(".shop-event-tree-sub").stop().slideUp();
        $(".shop-event-tree-title").css("background-color","#fff");
        $(".shop-event-tree-title").css("color","#000");
        
        if($(this).siblings(".shop-event-tree-sub").css("display")=="none"){
            $(this).siblings(".shop-event-tree-sub").stop().slideDown();
            $(this).css("background-color","rgba(0,0,0,0.85)").css("color","#fff");
        }else{
            $(this).siblings(".shop-event-tree-sub").stop().slideUp();
        }
    })
})

//=========================================================//
//=========================================================//
//=========================================================//

//top버튼 클릭 이벤트
$("#top").on("click",function(){
    $("html,body").stop().animate({"scrollTop":0},500);
})

//메인화면 스크롤이벤트 + top버튼
function main_scroll_event(){
    //스크롤 하단의 위치 비율
    let scrollBottom = Math.round(($(window).height()+$(window).scrollTop())/$("body").height()*100);
    
    //top버튼 등장 타이밍
    if(scrollBottom >=20){
        $("#top").fadeIn();
//        $("#top").css("opacity","1");
    }else{
        $("#top").fadeOut();
//        $("#top").css("opacity","0");
    }
    
    //그림 등장 타이밍
    if(scrollBottom >=30 && scrollBottom<=50){
        $(".bg-img1").css("left","0").css("opacity","1");
    }else{
        $(".bg-img1").css("left","-100px").css("opacity","0");
    }
    
    if(scrollBottom>=40 && scrollBottom<=60){
        $(".bg-img2").css("right","0").css("opacity","1");
    }else{
        $(".bg-img2").css("right","-100px").css("opacity","0");

    }
    
    if(scrollBottom>=60 && scrollBottom<=80){
        //메뉴박스 
        for(let i=0;i<3;i++){
            $("#content3 section .food").eq(i).css("top",80+(i*100)).css("opacity","1");
        }
    }else{
        for(let i=0;i<3;i++){
            $("#content3 section .food").eq(i).css("top",(i*100)).css("opacity","0");
        }
    }
}
//로드되었을 때 + 스크롤될 때 함수 부르기 + top버튼
window.onload = main_scroll_event();
window.addEventListener("scroll",main_scroll_event);


$(".food-list li").on("mouseover",function(){
    $(".food-list li").on("mousemove",function(){
        $(".see-food-info").show();
        $(".see-food-info").css("left",(event.pageX - ((window.innerWidth-1280)/2)+10)+"px");
        $(".see-food-info").css("top",(event.pageY - 810)+"px");
    })
})
$(".food-list li").on("mouseout",function(){
    $(".see-food-info").hide();
})