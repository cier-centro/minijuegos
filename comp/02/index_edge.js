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
                rect: ['-22px', '152px','915px','175px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mountains.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map19',
                type: 'image',
                rect: ['651px', '105px','244px','194px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map19.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map18',
                type: 'image',
                rect: ['743px', '230px','111px','94px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map18.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map17',
                type: 'image',
                rect: ['623px', '232px','198px','279px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map17.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map16',
                type: 'image',
                rect: ['590px', '241px','198px','198px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map16.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map15',
                type: 'image',
                rect: ['592px', '221px','158px','131px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map15.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map14',
                type: 'image',
                rect: ['558px', '212px','80px','142px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map14.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map13',
                type: 'image',
                rect: ['561px', '136px','222px','144px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map13.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map12',
                type: 'image',
                rect: ['551px', '365px','132px','222px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map12.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map11',
                type: 'image',
                rect: ['435px', '318px','232px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map11.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map10',
                type: 'image',
                rect: ['444px', '243px','200px','134px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map10.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map9',
                type: 'image',
                rect: ['470px', '220px','124px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map9.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map8',
                type: 'image',
                rect: ['444px', '143px','180px','114px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map8.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map7',
                type: 'image',
                rect: ['313px', '262px','206px','322px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map7.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map6',
                type: 'image',
                rect: ['362px', '210px','142px','145px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map6.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map4',
                type: 'image',
                rect: ['267px', '230px','167px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map4.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map3',
                type: 'image',
                rect: ['224px', '276px','238px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map3.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map2',
                type: 'image',
                rect: ['41px', '234px','328px','290px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map2.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map1',
                type: 'image',
                rect: ['0px', '150px','355px','185px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map1.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'img-map5',
                type: 'image',
                rect: ['262px', '173px','245px','106px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-map5.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'rutes-map',
                type: 'image',
                rect: ['-40px', '189px','890px','356px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rutes-map.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'map-point',
                type: 'image',
                rect: ['785px', '303px','24px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map-point.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_img-map11}": [
                ["style", "top", '318px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '435px']
            ],
            "${_img-map13}": [
                ["style", "top", '136px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '561px']
            ],
            "${_img-map1}": [
                ["style", "top", '150px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_img-map7}": [
                ["style", "top", '262px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '313px']
            ],
            "${_img-map18}": [
                ["style", "top", '230px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '743px']
            ],
            "${_map-point}": [
                ["style", "left", '785px'],
                ["style", "top", '303px']
            ],
            "${_mountains}": [
                ["style", "top", '201px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '-22px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(5,172,237,1.00)'],
                ["style", "height", '580px'],
                ["style", "width", '941px']
            ],
            "${_img-map9}": [
                ["style", "top", '220px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '470px']
            ],
            "${_img-map14}": [
                ["style", "top", '212px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '558px']
            ],
            "${_img-map10}": [
                ["style", "top", '243px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '444px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '941px'],
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden']
            ],
            "${_img-map16}": [
                ["style", "top", '241px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '590px']
            ],
            "${_img-map17}": [
                ["style", "top", '232px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '623px']
            ],
            "${_img-map15}": [
                ["style", "top", '221px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '592px']
            ],
            "${_img-map4}": [
                ["style", "top", '230px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '267px']
            ],
            "${_img-map2}": [
                ["style", "top", '234px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '41px']
            ],
            "${_img-map19}": [
                ["style", "top", '105px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '651px']
            ],
            "${_img-map5}": [
                ["style", "top", '173px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '262px']
            ],
            "${_img-map3}": [
                ["style", "top", '276px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '224px']
            ],
            "${_img-map8}": [
                ["style", "top", '143px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '444px']
            ],
            "${_img-map6}": [
                ["style", "top", '210px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '362px']
            ],
            "${_rutes-map}": [
                ["style", "top", '189px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '-40px']
            ],
            "${_img-map12}": [
                ["style", "top", '365px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '551px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2750,
            autoPlay: true,
            timeline: [
                { id: "eid90", tween: [ "transform", "${_img-map13}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1365, duration: 500, easing: "easeOutBack" },
                { id: "eid44", tween: [ "style", "${_img-map13}", "opacity", '1', { fromValue: '0'}], position: 1365, duration: 500, easing: "easeOutBack" },
                { id: "eid100", tween: [ "transform", "${_img-map12}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1440, duration: 500, easing: "easeOutBack" },
                { id: "eid88", tween: [ "transform", "${_img-map11}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1500, duration: 500, easing: "easeOutBack" },
                { id: "eid108", tween: [ "transform", "${_img-map3}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1940, duration: 500, easing: "easeOutBack" },
                { id: "eid52", tween: [ "style", "${_img-map3}", "opacity", '1', { fromValue: '0'}], position: 1940, duration: 500, easing: "easeOutBack" },
                { id: "eid134", tween: [ "transform", "${_img-map14}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1300, duration: 500, easing: "easeOutBack" },
                { id: "eid112", tween: [ "transform", "${_img-map18}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1055, duration: 500, easing: "easeOutBack" },
                { id: "eid96", tween: [ "transform", "${_img-map10}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1555, duration: 500, easing: "easeOutBack" },
                { id: "eid68", tween: [ "style", "${_img-map16}", "opacity", '1', { fromValue: '0'}], position: 1175, duration: 500, easing: "easeOutBack" },
                { id: "eid46", tween: [ "style", "${_img-map10}", "opacity", '1', { fromValue: '0'}], position: 1555, duration: 500, easing: "easeOutBack" },
                { id: "eid48", tween: [ "style", "${_img-map12}", "opacity", '1', { fromValue: '0'}], position: 1440, duration: 500, easing: "easeOutBack" },
                { id: "eid150", tween: [ "transform", "${_rutes-map}", "scaleX", '0.8', { fromValue: '1'}], position: 2000, duration: 620, easing: "easeOutBack" },
                { id: "eid122", tween: [ "transform", "${_img-map9}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1620, duration: 500, easing: "easeOutBack" },
                { id: "eid124", tween: [ "transform", "${_img-map9}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1620, duration: 500, easing: "easeOutBack" },
                { id: "eid92", tween: [ "transform", "${_img-map13}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1365, duration: 500, easing: "easeOutBack" },
                { id: "eid162", tween: [ "style", "${_mountains}", "top", '87px', { fromValue: '201px'}], position: 2250, duration: 500, easing: "easeOutBack" },
                { id: "eid50", tween: [ "style", "${_img-map6}", "opacity", '1', { fromValue: '0'}], position: 1800, duration: 500, easing: "easeOutBack" },
                { id: "eid70", tween: [ "style", "${_img-map2}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid60", tween: [ "style", "${_img-map9}", "opacity", '1', { fromValue: '0'}], position: 1620, duration: 500, easing: "easeOutBack" },
                { id: "eid146", tween: [ "transform", "${_img-map4}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1865, duration: 500, easing: "easeOutBack" },
                { id: "eid58", tween: [ "style", "${_img-map5}", "opacity", '1', { fromValue: '0'}], position: 2120, duration: 500, easing: "easeOutBack" },
                { id: "eid116", tween: [ "transform", "${_img-map15}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1250, duration: 500, easing: "easeOutBack" },
                { id: "eid76", tween: [ "transform", "${_img-map17}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1120, duration: 500, easing: "easeOutBack" },
                { id: "eid84", tween: [ "transform", "${_img-map1}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2055, duration: 500, easing: "easeOutBack" },
                { id: "eid118", tween: [ "transform", "${_img-map5}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2120, duration: 500, easing: "easeOutBack" },
                { id: "eid114", tween: [ "transform", "${_img-map15}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1250, duration: 500, easing: "easeOutBack" },
                { id: "eid82", tween: [ "transform", "${_img-map1}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2055, duration: 500, easing: "easeOutBack" },
                { id: "eid120", tween: [ "transform", "${_img-map5}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2120, duration: 500, easing: "easeOutBack" },
                { id: "eid40", tween: [ "style", "${_img-map1}", "opacity", '1', { fromValue: '0'}], position: 2055, duration: 500, easing: "easeOutBack" },
                { id: "eid148", tween: [ "transform", "${_img-map4}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1865, duration: 500, easing: "easeOutBack" },
                { id: "eid164", tween: [ "style", "${_mountains}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutBack" },
                { id: "eid104", tween: [ "transform", "${_img-map6}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1800, duration: 500, easing: "easeOutBack" },
                { id: "eid152", tween: [ "transform", "${_rutes-map}", "scaleY", '0.8', { fromValue: '1'}], position: 2000, duration: 620, easing: "easeOutBack" },
                { id: "eid94", tween: [ "transform", "${_img-map10}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1555, duration: 500, easing: "easeOutBack" },
                { id: "eid54", tween: [ "style", "${_img-map18}", "opacity", '1', { fromValue: '0'}], position: 1055, duration: 500, easing: "easeOutBack" },
                { id: "eid154", tween: [ "style", "${_rutes-map}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 620, easing: "easeOutBack" },
                { id: "eid144", tween: [ "transform", "${_img-map2}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid38", tween: [ "style", "${_img-map19}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid98", tween: [ "transform", "${_img-map12}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1440, duration: 500, easing: "easeOutBack" },
                { id: "eid142", tween: [ "transform", "${_img-map2}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid86", tween: [ "transform", "${_img-map11}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1500, duration: 500, easing: "easeOutBack" },
                { id: "eid74", tween: [ "transform", "${_img-map17}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1120, duration: 500, easing: "easeOutBack" },
                { id: "eid80", tween: [ "transform", "${_img-map19}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid138", tween: [ "transform", "${_img-map16}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1175, duration: 500, easing: "easeOutBack" },
                { id: "eid136", tween: [ "transform", "${_img-map14}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1300, duration: 500, easing: "easeOutBack" },
                { id: "eid128", tween: [ "transform", "${_img-map7}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid126", tween: [ "transform", "${_img-map7}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid110", tween: [ "transform", "${_img-map18}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1055, duration: 500, easing: "easeOutBack" },
                { id: "eid36", tween: [ "style", "${_img-map17}", "opacity", '1', { fromValue: '0'}], position: 1120, duration: 500, easing: "easeOutBack" },
                { id: "eid62", tween: [ "style", "${_img-map7}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid72", tween: [ "style", "${_img-map4}", "opacity", '1', { fromValue: '0'}], position: 1865, duration: 500, easing: "easeOutBack" },
                { id: "eid66", tween: [ "style", "${_img-map14}", "opacity", '1', { fromValue: '0'}], position: 1300, duration: 500, easing: "easeOutBack" },
                { id: "eid132", tween: [ "transform", "${_img-map8}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1675, duration: 500, easing: "easeOutBack" },
                { id: "eid56", tween: [ "style", "${_img-map15}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeOutBack" },
                { id: "eid106", tween: [ "transform", "${_img-map3}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1940, duration: 500, easing: "easeOutBack" },
                { id: "eid78", tween: [ "transform", "${_img-map19}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid130", tween: [ "transform", "${_img-map8}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1675, duration: 500, easing: "easeOutBack" },
                { id: "eid64", tween: [ "style", "${_img-map8}", "opacity", '1', { fromValue: '0'}], position: 1675, duration: 500, easing: "easeOutBack" },
                { id: "eid102", tween: [ "transform", "${_img-map6}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1800, duration: 500, easing: "easeOutBack" },
                { id: "eid140", tween: [ "transform", "${_img-map16}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1175, duration: 500, easing: "easeOutBack" },
                { id: "eid42", tween: [ "style", "${_img-map11}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeOutBack" }            ]
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
