/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif']='<script src=\"http://use.edgefonts.net/cabin:n4,i4,n7,i7,n5,i5,n6,i6:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','941px','580px','auto', 'auto'],
                fill: ["rgba(5,172,237,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'mountains',
                type: 'image',
                rect: ['-11px', '152px','915px','175px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mountains.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map19',
                type: 'image',
                rect: ['662px', '91px','244px','194px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map19.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map18',
                type: 'image',
                rect: ['752px', '218px','111px','94px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map18.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map17',
                type: 'image',
                rect: ['634px', '219px','198px','279px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map17.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map16',
                type: 'image',
                rect: ['601px', '227px','198px','198px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map16.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map15',
                type: 'image',
                rect: ['603px', '207px','158px','131px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map15.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map14',
                type: 'image',
                rect: ['569px', '198px','80px','142px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map14.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map13',
                type: 'image',
                rect: ['572px', '122px','222px','144px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map13.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map12',
                type: 'image',
                rect: ['562px', '351px','132px','222px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map12.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map11',
                type: 'image',
                rect: ['446px', '304px','232px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map11.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map10',
                type: 'image',
                rect: ['455px', '229px','200px','134px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map10.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map9',
                type: 'image',
                rect: ['481px', '206px','124px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map9.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map8',
                type: 'image',
                rect: ['455px', '129px','180px','114px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map8.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map7',
                type: 'image',
                rect: ['324px', '248px','206px','322px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map7.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map6',
                type: 'image',
                rect: ['373px', '196px','142px','145px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map6.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map4',
                type: 'image',
                rect: ['278px', '216px','167px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map4.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map3',
                type: 'image',
                rect: ['235px', '262px','238px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map3.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map2',
                type: 'image',
                rect: ['52px', '220px','328px','290px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map2.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map1',
                type: 'image',
                rect: ['11px', '136px','355px','185px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map1.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map5',
                type: 'image',
                rect: ['273px', '159px','245px','106px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map5.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'rutes-map',
                type: 'image',
                rect: ['-21px', '153px','890px','356px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rutes-map.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'pointer1',
                type: 'image',
                rect: ['728px', '200px','24px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map-point.png",'0px','0px']
            },
            {
                id: 'pointer2',
                type: 'image',
                rect: ['728px', '260px','24px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map-point.png",'0px','0px']
            },
            {
                id: 'pointer3',
                type: 'image',
                rect: ['716px', '338px','24px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map-point.png",'0px','0px']
            },
            {
                id: 'pointer4',
                type: 'image',
                rect: ['425px', '432px','24px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map-point.png",'0px','0px']
            },
            {
                id: 'Pointer5',
                type: 'image',
                rect: ['358px', '305px','24px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map-point.png",'0px','0px']
            },
            {
                id: 'Pointer6',
                type: 'image',
                rect: ['271px', '202px','24px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map-point.png",'0px','0px']
            },
            {
                id: 'pointer7',
                type: 'image',
                rect: ['220px', '397px','24px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map-point.png",'0px','0px']
            },
            {
                id: 'pointer8',
                type: 'image',
                rect: ['110px', '306px','24px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map-point.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_img-map11}": [
                ["style", "top", '304px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '446px']
            ],
            "${_Pointer6}": [
                ["style", "top", '202px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '271px'],
                ["transform", "scaleX", '0']
            ],
            "${_img-map13}": [
                ["style", "top", '122px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '572px']
            ],
            "${_img-map1}": [
                ["style", "top", '136px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '11px']
            ],
            "${_img-map9}": [
                ["style", "top", '206px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '481px']
            ],
            "${_mountains}": [
                ["style", "top", '201px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '-11px']
            ],
            "${_img-map16}": [
                ["style", "top", '227px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '601px']
            ],
            "${_pointer7}": [
                ["style", "top", '397px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '220px'],
                ["transform", "scaleX", '0']
            ],
            "${_pointer2}": [
                ["style", "top", '260px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '728px'],
                ["transform", "scaleX", '0']
            ],
            "${_img-map7}": [
                ["style", "top", '248px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '324px']
            ],
            "${_img-map18}": [
                ["style", "top", '218px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '752px']
            ],
            "${_Pointer5}": [
                ["style", "top", '305px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '358px'],
                ["transform", "scaleX", '0']
            ],
            "${_Rectangle}": [
                ["style", "height", '580px'],
                ["color", "background-color", 'rgba(5,172,237,1.00)'],
                ["style", "width", '941px']
            ],
            "${_pointer3}": [
                ["style", "top", '338px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '716px'],
                ["transform", "scaleX", '0']
            ],
            "${_img-map14}": [
                ["style", "top", '198px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '569px']
            ],
            "${_img-map19}": [
                ["style", "top", '91px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '662px']
            ],
            "${_pointer8}": [
                ["style", "top", '306px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '110px'],
                ["transform", "scaleX", '0']
            ],
            "${_img-map6}": [
                ["style", "top", '196px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '373px']
            ],
            "${_img-map17}": [
                ["style", "top", '219px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '634px']
            ],
            "${_img-map15}": [
                ["style", "top", '207px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '603px']
            ],
            "${_img-map3}": [
                ["style", "top", '262px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '235px']
            ],
            "${_img-map2}": [
                ["style", "top", '220px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '52px']
            ],
            "${_img-map4}": [
                ["style", "top", '216px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '278px']
            ],
            "${_img-map5}": [
                ["style", "top", '159px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '273px']
            ],
            "${_img-map10}": [
                ["style", "top", '229px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '455px']
            ],
            "${_pointer4}": [
                ["style", "top", '432px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '425px'],
                ["transform", "scaleX", '0']
            ],
            "${_img-map8}": [
                ["style", "top", '129px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '455px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "width", '941px']
            ],
            "${_pointer1}": [
                ["style", "top", '200px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '728px'],
                ["transform", "scaleX", '0']
            ],
            "${_rutes-map}": [
                ["style", "top", '153px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '-21px']
            ],
            "${_img-map12}": [
                ["style", "top", '351px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '562px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3170,
            autoPlay: true,
            timeline: [
                { id: "eid90", tween: [ "transform", "${_img-map13}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1365, duration: 500, easing: "easeOutBack" },
                { id: "eid166", tween: [ "transform", "${_pointer2}", "scaleX", '1', { fromValue: '0'}], position: 2300, duration: 500, easing: "easeOutBack" },
                { id: "eid176", tween: [ "transform", "${_pointer1}", "scaleY", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutBack" },
                { id: "eid44", tween: [ "style", "${_img-map13}", "opacity", '1', { fromValue: '0'}], position: 1365, duration: 500, easing: "easeOutBack" },
                { id: "eid100", tween: [ "transform", "${_img-map12}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1440, duration: 500, easing: "easeOutBack" },
                { id: "eid88", tween: [ "transform", "${_img-map11}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1500, duration: 500, easing: "easeOutBack" },
                { id: "eid108", tween: [ "transform", "${_img-map3}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1940, duration: 500, easing: "easeOutBack" },
                { id: "eid52", tween: [ "style", "${_img-map3}", "opacity", '1', { fromValue: '0'}], position: 1940, duration: 500, easing: "easeOutBack" },
                { id: "eid134", tween: [ "transform", "${_img-map14}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1300, duration: 500, easing: "easeOutBack" },
                { id: "eid112", tween: [ "transform", "${_img-map18}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1055, duration: 500, easing: "easeOutBack" },
                { id: "eid196", tween: [ "transform", "${_Pointer6}", "scaleY", '1', { fromValue: '0'}], position: 2555, duration: 500, easing: "easeOutBack" },
                { id: "eid96", tween: [ "transform", "${_img-map10}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1555, duration: 500, easing: "easeOutBack" },
                { id: "eid68", tween: [ "style", "${_img-map16}", "opacity", '1', { fromValue: '0'}], position: 1175, duration: 500, easing: "easeOutBack" },
                { id: "eid46", tween: [ "style", "${_img-map10}", "opacity", '1', { fromValue: '0'}], position: 1555, duration: 500, easing: "easeOutBack" },
                { id: "eid48", tween: [ "style", "${_img-map12}", "opacity", '1', { fromValue: '0'}], position: 1440, duration: 500, easing: "easeOutBack" },
                { id: "eid180", tween: [ "transform", "${_pointer8}", "scaleY", '1', { fromValue: '0'}], position: 2670, duration: 500, easing: "easeOutBack" },
                { id: "eid150", tween: [ "transform", "${_rutes-map}", "scaleX", '0.78', { fromValue: '1'}], position: 2000, duration: 620, easing: "easeOutBack" },
                { id: "eid122", tween: [ "transform", "${_img-map9}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1620, duration: 500, easing: "easeOutBack" },
                { id: "eid124", tween: [ "transform", "${_img-map9}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1620, duration: 500, easing: "easeOutBack" },
                { id: "eid92", tween: [ "transform", "${_img-map13}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1365, duration: 500, easing: "easeOutBack" },
                { id: "eid162", tween: [ "style", "${_mountains}", "top", '73px', { fromValue: '201px'}], position: 2250, duration: 500, easing: "easeOutBack" },
                { id: "eid194", tween: [ "transform", "${_Pointer6}", "scaleX", '1', { fromValue: '0'}], position: 2555, duration: 500, easing: "easeOutBack" },
                { id: "eid50", tween: [ "style", "${_img-map6}", "opacity", '1', { fromValue: '0'}], position: 1800, duration: 500, easing: "easeOutBack" },
                { id: "eid70", tween: [ "style", "${_img-map2}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid60", tween: [ "style", "${_img-map9}", "opacity", '1', { fromValue: '0'}], position: 1620, duration: 500, easing: "easeOutBack" },
                { id: "eid174", tween: [ "transform", "${_pointer1}", "scaleX", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutBack" },
                { id: "eid146", tween: [ "transform", "${_img-map4}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1865, duration: 500, easing: "easeOutBack" },
                { id: "eid182", tween: [ "transform", "${_Pointer5}", "scaleX", '1', { fromValue: '0'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid58", tween: [ "style", "${_img-map5}", "opacity", '1', { fromValue: '0'}], position: 2120, duration: 500, easing: "easeOutBack" },
                { id: "eid116", tween: [ "transform", "${_img-map15}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1250, duration: 500, easing: "easeOutBack" },
                { id: "eid76", tween: [ "transform", "${_img-map17}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1120, duration: 500, easing: "easeOutBack" },
                { id: "eid84", tween: [ "transform", "${_img-map1}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2055, duration: 500, easing: "easeOutBack" },
                { id: "eid118", tween: [ "transform", "${_img-map5}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2120, duration: 500, easing: "easeOutBack" },
                { id: "eid192", tween: [ "transform", "${_pointer4}", "scaleY", '1', { fromValue: '0'}], position: 2440, duration: 500, easing: "easeOutBack" },
                { id: "eid190", tween: [ "transform", "${_pointer4}", "scaleX", '1', { fromValue: '0'}], position: 2440, duration: 500, easing: "easeOutBack" },
                { id: "eid62", tween: [ "style", "${_img-map7}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid114", tween: [ "transform", "${_img-map15}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1250, duration: 500, easing: "easeOutBack" },
                { id: "eid178", tween: [ "transform", "${_pointer8}", "scaleX", '1', { fromValue: '0'}], position: 2670, duration: 500, easing: "easeOutBack" },
                { id: "eid138", tween: [ "transform", "${_img-map16}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1175, duration: 500, easing: "easeOutBack" },
                { id: "eid188", tween: [ "transform", "${_pointer3}", "scaleY", '1', { fromValue: '0'}], position: 2365, duration: 500, easing: "easeOutBack" },
                { id: "eid66", tween: [ "style", "${_img-map14}", "opacity", '1', { fromValue: '0'}], position: 1300, duration: 500, easing: "easeOutBack" },
                { id: "eid186", tween: [ "transform", "${_pointer3}", "scaleX", '1', { fromValue: '0'}], position: 2365, duration: 500, easing: "easeOutBack" },
                { id: "eid40", tween: [ "style", "${_img-map1}", "opacity", '1', { fromValue: '0'}], position: 2055, duration: 500, easing: "easeOutBack" },
                { id: "eid148", tween: [ "transform", "${_img-map4}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1865, duration: 500, easing: "easeOutBack" },
                { id: "eid168", tween: [ "transform", "${_pointer2}", "scaleY", '1', { fromValue: '0'}], position: 2300, duration: 500, easing: "easeOutBack" },
                { id: "eid126", tween: [ "transform", "${_img-map7}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid152", tween: [ "transform", "${_rutes-map}", "scaleY", '0.78', { fromValue: '1'}], position: 2000, duration: 620, easing: "easeOutBack" },
                { id: "eid94", tween: [ "transform", "${_img-map10}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1555, duration: 500, easing: "easeOutBack" },
                { id: "eid54", tween: [ "style", "${_img-map18}", "opacity", '1', { fromValue: '0'}], position: 1055, duration: 500, easing: "easeOutBack" },
                { id: "eid184", tween: [ "transform", "${_Pointer5}", "scaleY", '1', { fromValue: '0'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid172", tween: [ "transform", "${_pointer7}", "scaleY", '1', { fromValue: '0'}], position: 2620, duration: 500, easing: "easeOutBack" },
                { id: "eid38", tween: [ "style", "${_img-map19}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid136", tween: [ "transform", "${_img-map14}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1300, duration: 500, easing: "easeOutBack" },
                { id: "eid170", tween: [ "transform", "${_pointer7}", "scaleX", '1', { fromValue: '0'}], position: 2620, duration: 500, easing: "easeOutBack" },
                { id: "eid128", tween: [ "transform", "${_img-map7}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid36", tween: [ "style", "${_img-map17}", "opacity", '1', { fromValue: '0'}], position: 1120, duration: 500, easing: "easeOutBack" },
                { id: "eid80", tween: [ "transform", "${_img-map19}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid42", tween: [ "style", "${_img-map11}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeOutBack" },
                { id: "eid74", tween: [ "transform", "${_img-map17}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1120, duration: 500, easing: "easeOutBack" },
                { id: "eid102", tween: [ "transform", "${_img-map6}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1800, duration: 500, easing: "easeOutBack" },
                { id: "eid64", tween: [ "style", "${_img-map8}", "opacity", '1', { fromValue: '0'}], position: 1675, duration: 500, easing: "easeOutBack" },
                { id: "eid142", tween: [ "transform", "${_img-map2}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid120", tween: [ "transform", "${_img-map5}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2120, duration: 500, easing: "easeOutBack" },
                { id: "eid110", tween: [ "transform", "${_img-map18}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1055, duration: 500, easing: "easeOutBack" },
                { id: "eid98", tween: [ "transform", "${_img-map12}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1440, duration: 500, easing: "easeOutBack" },
                { id: "eid56", tween: [ "style", "${_img-map15}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeOutBack" },
                { id: "eid104", tween: [ "transform", "${_img-map6}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1800, duration: 500, easing: "easeOutBack" },
                { id: "eid82", tween: [ "transform", "${_img-map1}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2055, duration: 500, easing: "easeOutBack" },
                { id: "eid72", tween: [ "style", "${_img-map4}", "opacity", '1', { fromValue: '0'}], position: 1865, duration: 500, easing: "easeOutBack" },
                { id: "eid132", tween: [ "transform", "${_img-map8}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1675, duration: 500, easing: "easeOutBack" },
                { id: "eid164", tween: [ "style", "${_mountains}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutBack" },
                { id: "eid106", tween: [ "transform", "${_img-map3}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1940, duration: 500, easing: "easeOutBack" },
                { id: "eid78", tween: [ "transform", "${_img-map19}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid130", tween: [ "transform", "${_img-map8}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1675, duration: 500, easing: "easeOutBack" },
                { id: "eid86", tween: [ "transform", "${_img-map11}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1500, duration: 500, easing: "easeOutBack" },
                { id: "eid144", tween: [ "transform", "${_img-map2}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid140", tween: [ "transform", "${_img-map16}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1175, duration: 500, easing: "easeOutBack" },
                { id: "eid154", tween: [ "style", "${_rutes-map}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 620, easing: "easeOutBack" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-13420505");
