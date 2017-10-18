/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['Helvetica']='';
    fonts['cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif']='<script src=\"http://use.edgefonts.net/cabin:n4,i4,n7,i7,n5,i5,n6,i6:all.js\"></script>';
    fonts['\'GillSans Light\'']='';

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
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'count',
                display: 'block',
                type: 'rect',
                rect: ['458px', '530px','63px','50px','auto', 'auto'],
                fill: ["rgba(44,62,80,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','980px','580px','auto', 'auto'],
                fill: ["rgba(97,171,235,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'img-icon',
                type: 'image',
                rect: ['-23px', '-30px','321px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img-icon.png",'0px','0px']
            },
            {
                id: 'slide_40',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_39',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_38',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_37',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_36',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_35',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_34',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_33',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_32',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_31',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_30',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_29',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_28',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_27',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_26',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_25',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_24',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_23',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_22',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_21',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_20',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_19',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_18',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_17',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_16',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_15',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_14',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_13',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_12',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto'],
                opacity: 1
            },
            {
                id: 'slide_11',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_10',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_9',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0px','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_8',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_7',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_6',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_5',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto']
            },
            {
                id: 'slide_4',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','980px','580px','auto', 'auto'],
                opacity: 1
            },
            {
                id: 'slide_3',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0px','980px','580px','auto', 'auto'],
                opacity: 1
            },
            {
                id: 'slide_2',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0px','980px','580px','auto', 'auto'],
                opacity: 1
            },
            {
                id: 'slide_1',
                display: 'block',
                type: 'rect',
                rect: ['0px', '0px','auto','auto','auto', 'auto']
            },
            {
                id: 'bt_next',
                display: 'block',
                type: 'rect',
                rect: ['726px', '469px','auto','auto','auto', 'auto']
            },
            {
                id: 'bt_back',
                display: 'none',
                type: 'rect',
                rect: ['0px', '469px','auto','auto','auto', 'auto']
            },
            {
                id: 'instruccion',
                display: 'block',
                type: 'text',
                rect: ['104px', '205px','1146px','auto','auto', 'auto'],
                text: "Lorem ipsum dolor sit amet, consectetur",
                align: "left",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 21, "rgba(44,53,104,1.00)", "400", "none", "normal"]
            },
            {
                id: 'inst-icons',
                display: 'block',
                type: 'image',
                rect: ['721px', '460px','334px','145px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"inst-icons.png",'0px','0px'],
                transform: [[],[],[],['0.55','0.55']]
            },
            {
                id: 'btn_home',
                display: 'none',
                type: 'rect',
                rect: ['262px', '30','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'btn_homeArtes',
                display: 'none',
                type: 'rect',
                rect: ['262px', '30px','auto','auto','auto', 'auto']
            },
            {
                id: 'btn_homeEducacion',
                display: 'none',
                type: 'rect',
                rect: ['262px', '30px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'slide_13',
                symbolName: 'slide_13',
                autoPlay: {

                }
            },
            {
                id: 'slide_33',
                symbolName: 'slide_33',
                autoPlay: {

                }
            },
            {
                id: 'slide_6',
                symbolName: 'slide_6'
            },
            {
                id: 'slide_31',
                symbolName: 'slide_31',
                autoPlay: {

                }
            },
            {
                id: 'slide_22',
                symbolName: 'slide_22',
                autoPlay: {

                }
            },
            {
                id: 'slide_14',
                symbolName: 'slide_14',
                autoPlay: {

                }
            },
            {
                id: 'slide_12',
                symbolName: 'slide_12',
                autoPlay: {

                }
            },
            {
                id: 'slide_20',
                symbolName: 'slide_20',
                autoPlay: {

                }
            },
            {
                id: 'slide_19',
                symbolName: 'slide_19',
                autoPlay: {

                }
            },
            {
                id: 'slide_40',
                symbolName: 'slide_40',
                autoPlay: {

                }
            },
            {
                id: 'slide_16',
                symbolName: 'slide_16',
                autoPlay: {

                }
            },
            {
                id: 'slide_2',
                symbolName: 'slide_2',
                autoPlay: {

                }
            },
            {
                id: 'slide_36',
                symbolName: 'slide_36',
                autoPlay: {

                }
            },
            {
                id: 'slide_26',
                symbolName: 'slide_26',
                autoPlay: {

                }
            },
            {
                id: 'slide_39',
                symbolName: 'slide_39',
                autoPlay: {

                }
            },
            {
                id: 'btn_home',
                symbolName: 'btn_home'
            },
            {
                id: 'slide_15',
                symbolName: 'slide_15',
                autoPlay: {

                }
            },
            {
                id: 'btn_homeEducacion',
                symbolName: 'btn_homeEducacion'
            },
            {
                id: 'slide_38',
                symbolName: 'slide_38',
                autoPlay: {

                }
            },
            {
                id: 'slide_30',
                symbolName: 'slide_30',
                autoPlay: {

                }
            },
            {
                id: 'slide_5',
                symbolName: 'slide_5',
                autoPlay: {

                }
            },
            {
                id: 'slide_25',
                symbolName: 'slide_25',
                autoPlay: {

                }
            },
            {
                id: 'slide_21',
                symbolName: 'slide_21',
                autoPlay: {

                }
            },
            {
                id: 'btn_homeArtes',
                symbolName: 'btn_homeArtes'
            },
            {
                id: 'slide_17',
                symbolName: 'slide_17',
                autoPlay: {

                }
            },
            {
                id: 'slide_28',
                symbolName: 'slide_28',
                autoPlay: {

                }
            },
            {
                id: 'bt_next',
                symbolName: 'bt_next',
                autoPlay: {

                }
            },
            {
                id: 'slide_1',
                symbolName: 'slide_1',
                autoPlay: {

                }
            },
            {
                id: 'slide_3',
                symbolName: 'slide_3',
                autoPlay: {

                }
            },
            {
                id: 'slide_4',
                symbolName: 'slide_4',
                autoPlay: {

                }
            },
            {
                id: 'slide_7',
                symbolName: 'slide_7',
                autoPlay: {

                }
            },
            {
                id: 'slide_35',
                symbolName: 'slide_35',
                autoPlay: {

                }
            },
            {
                id: 'slide_8',
                symbolName: 'slide_8',
                autoPlay: {

                }
            },
            {
                id: 'slide_9',
                symbolName: 'slide_9'
            },
            {
                id: 'slide_18',
                symbolName: 'slide_18',
                autoPlay: {

                }
            },
            {
                id: 'slide_24',
                symbolName: 'slide_24',
                autoPlay: {

                }
            },
            {
                id: 'slide_37',
                symbolName: 'slide_37',
                autoPlay: {

                }
            },
            {
                id: 'slide_29',
                symbolName: 'slide_29',
                autoPlay: {

                }
            },
            {
                id: 'slide_10',
                symbolName: 'slide_10',
                autoPlay: {

                }
            },
            {
                id: 'slide_32',
                symbolName: 'slide_32',
                autoPlay: {

                }
            },
            {
                id: 'slide_34',
                symbolName: 'slide_34',
                autoPlay: {

                }
            },
            {
                id: 'slide_11',
                symbolName: 'slide_11',
                autoPlay: {

                }
            },
            {
                id: 'slide_27',
                symbolName: 'slide_27',
                autoPlay: {

                }
            },
            {
                id: 'bt_back',
                symbolName: 'bt_back',
                autoPlay: {

                }
            },
            {
                id: 'slide_23',
                symbolName: 'slide_23',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_slide_1}": [
                ["style", "display", 'block'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible']
            ],
            "${_slide_7}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_2}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_btn_homeEducacion}": [
                ["style", "top", '30px'],
                ["style", "left", '262px'],
                ["style", "display", 'none']
            ],
            "${_slide_31}": [
                ["style", "display", 'none'],
                ["style", "height", '580px'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_20}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_19}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_btn_homeArtes}": [
                ["style", "top", '30px'],
                ["style", "left", '262px'],
                ["style", "display", 'none']
            ],
            "${_slide_6}": [
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_inst-icons}": [
                ["style", "top", '460px'],
                ["transform", "scaleY", '0.55'],
                ["transform", "scaleX", '0.55'],
                ["style", "left", '721px'],
                ["style", "display", 'block']
            ],
            "${_slide_33}": [
                ["style", "display", 'none'],
                ["style", "height", '580px'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_34}": [
                ["style", "display", 'none'],
                ["style", "height", '580px'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_37}": [
                ["style", "display", 'none'],
                ["style", "height", '580px'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_instruccion}": [
                ["style", "top", '205px'],
                ["style", "font-size", '21px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["color", "color", 'rgba(44,53,104,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '104px'],
                ["style", "width", '1146px']
            ],
            "${_img-icon}": [
                ["style", "left", '-23px'],
                ["style", "top", '-30px']
            ],
            "${_slide_8}": [
                ["style", "display", 'none'],
                ["style", "height", '580px'],
                ["style", "width", '980px']
            ],
            "${_slide_12}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_35}": [
                ["style", "display", 'none'],
                ["style", "height", '580px'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_28}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_bt_next}": [
                ["style", "top", '469px'],
                ["transform", "scaleY", '1'],
                ["style", "overflow", 'hidden'],
                ["style", "display", 'block'],
                ["style", "left", '726px'],
                ["transform", "scaleX", '1']
            ],
            "${_slide_16}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_10}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_36}": [
                ["style", "display", 'none'],
                ["style", "height", '580px'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_label}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_slide_18}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '980px']
            ],
            "${_slide_13}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_29}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_21}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_30}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_32}": [
                ["style", "display", 'none'],
                ["style", "height", '580px'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_5}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_11}": [
                ["style", "display", 'none'],
                ["style", "height", '580px'],
                ["style", "width", '980px']
            ],
            "${_slide_25}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_bt_back}": [
                ["style", "top", '469px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '0px']
            ],
            "${_slide_26}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_btn_home}": [
                ["style", "display", 'none'],
                ["style", "left", '262px'],
                ["style", "cursor", 'pointer']
            ],
            "${_slide_14}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(97,171,235,1.00)']
            ],
            "${_slide_27}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_15}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_9}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_slide_24}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_22}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_39}": [
                ["style", "display", 'none'],
                ["style", "height", '580px'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_38}": [
                ["style", "display", 'none'],
                ["style", "height", '580px'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_23}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_count}": [
                ["color", "background-color", 'rgba(44,62,80,1.00)'],
                ["style", "display", 'block'],
                ["style", "top", '530px'],
                ["style", "left", '458px'],
                ["style", "width", '63px']
            ],
            "${_slide_40}": [
                ["style", "display", 'none'],
                ["style", "height", '580px'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_4}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_17}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_3}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 40000,
            autoPlay: true,
            labels: {
                "slide_1": 0,
                "slide_2": 1000,
                "slide_3": 2000,
                "slide_4": 3000,
                "slide_5": 4000,
                "slide_6": 5000,
                "slide_7": 6000,
                "slide_8": 7000,
                "slide_9": 8000,
                "slide_10": 9000,
                "slide_11": 10000,
                "slide_12": 11000,
                "slide_13": 12000,
                "slide_14": 13000,
                "slide_15": 14000,
                "slide_16": 15000,
                "slide_17": 16000,
                "slide_18": 17000,
                "slide_19": 18000,
                "slide_20": 19000,
                "slide_21": 20000,
                "slide_22": 21000,
                "slide_23": 22000,
                "slide_24": 23000,
                "slide_25": 24000,
                "slide_26": 25000,
                "slide_27": 26000,
                "slide_28": 27000,
                "slide_29": 28000,
                "slide_30": 29000,
                "slide_31": 30000,
                "slide_32": 31000,
                "slide_33": 32000,
                "slide_34": 33000,
                "slide_35": 34000,
                "slide_36": 35000,
                "slide_37": 36000,
                "slide_38": 37000,
                "slide_39": 38000,
                "slide_40": 39000
            },
            timeline: [
                { id: "eid1771", tween: [ "style", "${_count}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid1047", tween: [ "style", "${_slide_29}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1292", tween: [ "style", "${_slide_29}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid1293", tween: [ "style", "${_slide_29}", "display", 'none', { fromValue: 'block'}], position: 29000, duration: 0 },
                { id: "eid1114", tween: [ "style", "${_slide_15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1248", tween: [ "style", "${_slide_15}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid1249", tween: [ "style", "${_slide_15}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid1316", tween: [ "style", "${_slide_31}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid1317", tween: [ "style", "${_slide_31}", "display", 'none', { fromValue: 'block'}], position: 31000, duration: 0 },
                { id: "eid1625", tween: [ "style", "${_bt_next}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1132", tween: [ "style", "${_slide_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1101", tween: [ "style", "${_slide_2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1131", tween: [ "style", "${_slide_2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid2069", tween: [ "style", "${_slide_9}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0, easing: "easeOutSine" },
                { id: "eid2070", tween: [ "style", "${_slide_9}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0, easing: "easeOutSine" },
                { id: "eid1118", tween: [ "style", "${_slide_19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1272", tween: [ "style", "${_slide_19}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid1273", tween: [ "style", "${_slide_19}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
                { id: "eid1124", tween: [ "style", "${_slide_25}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1284", tween: [ "style", "${_slide_25}", "display", 'block', { fromValue: 'none'}], position: 24000, duration: 0 },
                { id: "eid1285", tween: [ "style", "${_slide_25}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0 },
                { id: "eid1858", tween: [ "style", "${_slide_1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutBack" },
                { id: "eid1109", tween: [ "style", "${_slide_10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1238", tween: [ "style", "${_slide_10}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid1239", tween: [ "style", "${_slide_10}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid2067", tween: [ "style", "${_btn_homeEducacion}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0, easing: "easeOutBack" },
                { id: "eid2068", tween: [ "style", "${_btn_homeEducacion}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0, easing: "easeOutBack" },
                { id: "eid2024", tween: [ "style", "${_btn_home}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutBack" },
                { id: "eid2049", tween: [ "style", "${_btn_home}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeOutBack" },
                { id: "eid2050", tween: [ "style", "${_btn_homeArtes}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutBack" },
                { id: "eid2051", tween: [ "style", "${_btn_homeArtes}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0, easing: "easeOutBack" },
                { id: "eid1120", tween: [ "style", "${_slide_21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1276", tween: [ "style", "${_slide_21}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid1277", tween: [ "style", "${_slide_21}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
                { id: "eid1944", tween: [ "style", "${_inst-icons}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutSine" },
                { id: "eid1113", tween: [ "style", "${_slide_14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1246", tween: [ "style", "${_slide_14}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid1247", tween: [ "style", "${_slide_14}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid1126", tween: [ "style", "${_slide_27}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1288", tween: [ "style", "${_slide_27}", "display", 'block', { fromValue: 'none'}], position: 26000, duration: 0 },
                { id: "eid1289", tween: [ "style", "${_slide_27}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0 },
                { id: "eid1035", tween: [ "style", "${_slide_17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1252", tween: [ "style", "${_slide_17}", "display", 'block', { fromValue: 'none'}], position: 16000, duration: 0 },
                { id: "eid1253", tween: [ "style", "${_slide_17}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 },
                { id: "eid1117", tween: [ "style", "${_slide_18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1270", tween: [ "style", "${_slide_18}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid1271", tween: [ "style", "${_slide_18}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid1325", tween: [ "style", "${_slide_34}", "display", 'block', { fromValue: 'none'}], position: 33000, duration: 0 },
                { id: "eid1327", tween: [ "style", "${_slide_34}", "display", 'none', { fromValue: 'block'}], position: 34000, duration: 0 },
                { id: "eid1334", tween: [ "style", "${_slide_38}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0 },
                { id: "eid1335", tween: [ "style", "${_slide_38}", "display", 'none', { fromValue: 'block'}], position: 38000, duration: 0 },
                { id: "eid1348", tween: [ "style", "${_instruccion}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1318", tween: [ "style", "${_slide_32}", "display", 'block', { fromValue: 'none'}], position: 31000, duration: 0 },
                { id: "eid1319", tween: [ "style", "${_slide_32}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0 },
                { id: "eid1330", tween: [ "style", "${_slide_36}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
                { id: "eid1331", tween: [ "style", "${_slide_36}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0 },
                { id: "eid1129", tween: [ "style", "${_slide_30}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1294", tween: [ "style", "${_slide_30}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0 },
                { id: "eid1295", tween: [ "style", "${_slide_30}", "display", 'none', { fromValue: 'block'}], position: 30000, duration: 0 },
                { id: "eid1336", tween: [ "style", "${_slide_39}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid1337", tween: [ "style", "${_slide_39}", "display", 'none', { fromValue: 'block'}], position: 39000, duration: 0 },
                { id: "eid1328", tween: [ "style", "${_slide_35}", "display", 'block', { fromValue: 'none'}], position: 34000, duration: 0 },
                { id: "eid1329", tween: [ "style", "${_slide_35}", "display", 'none', { fromValue: 'block'}], position: 35000, duration: 0 },
                { id: "eid1103", tween: [ "style", "${_slide_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1134", tween: [ "style", "${_slide_4}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid1136", tween: [ "style", "${_slide_4}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid1026", tween: [ "style", "${_slide_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1234", tween: [ "style", "${_slide_8}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid1235", tween: [ "style", "${_slide_8}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid1110", tween: [ "style", "${_slide_11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1240", tween: [ "style", "${_slide_11}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid1241", tween: [ "style", "${_slide_11}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid1332", tween: [ "style", "${_slide_37}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid1333", tween: [ "style", "${_slide_37}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0 },
                { id: "eid1133", tween: [ "style", "${_slide_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1102", tween: [ "style", "${_slide_3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1135", tween: [ "style", "${_slide_3}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid1123", tween: [ "style", "${_slide_24}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1282", tween: [ "style", "${_slide_24}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid1283", tween: [ "style", "${_slide_24}", "display", 'none', { fromValue: 'block'}], position: 24000, duration: 0 },
                { id: "eid1025", tween: [ "style", "${_slide_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1232", tween: [ "style", "${_slide_7}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid1233", tween: [ "style", "${_slide_7}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid1046", tween: [ "style", "${_slide_28}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1290", tween: [ "style", "${_slide_28}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid1291", tween: [ "style", "${_slide_28}", "display", 'none', { fromValue: 'block'}], position: 28000, duration: 0 },
                { id: "eid1979", tween: [ "style", "${_bt_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid1040", tween: [ "style", "${_slide_22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1278", tween: [ "style", "${_slide_22}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid1279", tween: [ "style", "${_slide_22}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0 },
                { id: "eid1038", tween: [ "style", "${_slide_20}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1274", tween: [ "style", "${_slide_20}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid1275", tween: [ "style", "${_slide_20}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid1044", tween: [ "style", "${_slide_26}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1286", tween: [ "style", "${_slide_26}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid1287", tween: [ "style", "${_slide_26}", "display", 'none', { fromValue: 'block'}], position: 26000, duration: 0 },
                { id: "eid1031", tween: [ "style", "${_slide_13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1244", tween: [ "style", "${_slide_13}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid1245", tween: [ "style", "${_slide_13}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid1111", tween: [ "style", "${_slide_12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1242", tween: [ "style", "${_slide_12}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid1243", tween: [ "style", "${_slide_12}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid2047", tween: [ "style", "${_slide_6}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutBack" },
                { id: "eid2048", tween: [ "style", "${_slide_6}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "easeOutBack" },
                { id: "eid1494", tween: [ "style", "${_slide_40}", "display", 'block', { fromValue: 'none'}], position: 39000, duration: 0 },
                { id: "eid1495", tween: [ "style", "${_slide_40}", "display", 'none', { fromValue: 'block'}], position: 40000, duration: 0 },
                { id: "eid1041", tween: [ "style", "${_slide_23}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1280", tween: [ "style", "${_slide_23}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid1281", tween: [ "style", "${_slide_23}", "display", 'none', { fromValue: 'block'}], position: 23000, duration: 0 },
                { id: "eid1115", tween: [ "style", "${_slide_16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1250", tween: [ "style", "${_slide_16}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid1251", tween: [ "style", "${_slide_16}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0 },
                { id: "eid1322", tween: [ "style", "${_slide_33}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid1324", tween: [ "style", "${_slide_33}", "display", 'none', { fromValue: 'block'}], position: 33000, duration: 0 },
                { id: "eid1104", tween: [ "style", "${_slide_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1226", tween: [ "style", "${_slide_5}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid1227", tween: [ "style", "${_slide_5}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 }            ]
        }
    }
},
"bt_next": {
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
                    type: 'image',
                    id: 'nav_next',
                    rect: ['0px', '-8px', '145px', '145px', 'auto', 'auto'],
                    clip: ['rect(5.599853515625px 50.7998046875px 76.39990234375px 4px)'],
                    fill: ['rgba(0,0,0,0)', 'images/nav.png', '0px', '0px', '70px', '70px']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '60px', '64px', 'auto', 'auto'],
                    id: 'hotspot_area_next',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotspot_area_next}": [
                ["style", "left", '0px'],
                ["style", "height", '64px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '60px']
            ],
            "${_nav_next}": [
                ["style", "top", '-9px'],
                ["style", "clip", [8.849853515625,60.2998046875,72.64990234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-82.5,-1], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '145px'],
                ["style", "background-size", [145,145], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "width", '145px']
            ],
            "${symbolSelector}": [
                ["style", "height", '64px'],
                ["style", "width", '60px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 1000,
                "up": 2000
            },
            timeline: [
                { id: "eid1853", tween: [ "style", "${_nav_next}", "background-position", [-82.75,-69.25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-82.5,-1]}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid1748", tween: [ "style", "${_nav_next}", "background-position", [-82,-2.25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-82.75,-69.25]}], position: 2000, duration: 0 },
                { id: "eid1743", tween: [ "style", "${_nav_next}", "top", '-9px', { fromValue: '-9px'}], position: 0, duration: 0 },
                { id: "eid1744", tween: [ "style", "${_nav_next}", "top", '-7px', { fromValue: '-7px'}], position: 1000, duration: 0 },
                { id: "eid1745", tween: [ "style", "${_nav_next}", "top", '-7px', { fromValue: '-7px'}], position: 2000, duration: 0 },
                { id: "eid1854", tween: [ "style", "${_nav_next}", "clip", [6.836760997772217,59.94901657104492,70.20258331298828,-0.21041199564933777], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [8.849853515625,60.2998046875,72.64990234375,0]}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid1855", tween: [ "style", "${_nav_next}", "clip", [7.099853515625,60.0498046875,70.64990234375,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [6.836760997772217,59.94901657104492,70.20258331298828,-0.21041199564933777]}], position: 1000, duration: 1000, easing: "easeOutBack" }            ]
        }
    }
},
"bt_back": {
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
                    type: 'image',
                    id: 'nav_back',
                    rect: ['-4px', '-8px', '145px', '145px', 'auto', 'auto'],
                    clip: ['rect(5.599853515625px 50.7998046875px 76.39990234375px 4px)'],
                    fill: ['rgba(0,0,0,0)', 'images/nav.png', '0px', '0px', '70px', '70px']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '70px', '70px', 'auto', 'auto'],
                    id: 'hotspot_area_back',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotspot_area_back}": [
                ["style", "height", '70px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '70px']
            ],
            "${_nav_back}": [
                ["style", "top", '-9px'],
                ["style", "clip", [8.849853515625,63.7998046875,72.89990234375,4], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-4px'],
                ["style", "height", '145px'],
                ["style", "background-size", [145,145], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "background-position", [-3,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '145px']
            ],
            "${symbolSelector}": [
                ["style", "height", '64px'],
                ["style", "width", '60px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 1000,
                "up": 2000
            },
            timeline: [
                { id: "eid1860", tween: [ "style", "${_nav_back}", "background-position", [-3.5,-68.75], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3,0]}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid1192", tween: [ "style", "${_nav_back}", "background-position", [-3.5,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3.5,-68.75]}], position: 2000, duration: 0 },
                { id: "eid1865", tween: [ "style", "${_nav_back}", "clip", [8.849853515625,63.7998046875,72.89990234375,4], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [8.849853515625,63.7998046875,72.89990234375,4]}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid1450", tween: [ "style", "${_nav_back}", "top", '-9px', { fromValue: '-9px'}], position: 0, duration: 0 },
                { id: "eid1449", tween: [ "style", "${_nav_back}", "top", '-7px', { fromValue: '-9px'}], position: 1000, duration: 0 },
                { id: "eid1451", tween: [ "style", "${_nav_back}", "top", '-9px', { fromValue: '-7px'}], position: 2000, duration: 0 }            ]
        }
    }
},
"slide_2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'btn_iniciar2',
                    type: 'rect',
                    rect: ['593', '357px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['266px', '174px', '414px', '73px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'Rectangle8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,66,104,1.00)']
                },
                {
                    rect: ['295px', '182px', '224px', '30px', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Actividad Interactiva',
                    font: ['Arial, Helvetica, sans-serif', 22, 'rgba(255,255,255,1.00)', '100', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['295px', '206px', '379px', '30px', 'auto', 'auto'],
                    id: 'TextCopy',
                    text: 'Agronomía, veterinaria y afines',
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '900', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['175px', '150px', '1044px', '120px', 'auto', 'auto'],
                    id: 'icons-a',
                    type: 'image',
                    clip: ['rect(0px 119px 120px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/icons-a.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'btn_iniciar2',
                symbolName: 'btn_iniciar',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btn_iniciar2}": [
                ["style", "top", '357px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '505px']
            ],
            "${_Text}": [
                ["style", "top", '182px'],
                ["style", "opacity", '0'],
                ["style", "font-size", '22px'],
                ["style", "height", '30px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '262px'],
                ["style", "width", '224px']
            ],
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TextCopy}": [
                ["style", "top", '206px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '30px'],
                ["style", "font-weight", '900'],
                ["style", "left", '262px'],
                ["style", "width", '379px']
            ],
            "${_Rectangle8}": [
                ["color", "background-color", 'rgba(0,66,104,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '0px'],
                ["style", "top", '174px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '73px'],
                ["style", "left", '266px']
            ],
            "${_icons-a}": [
                ["style", "-webkit-transform-origin", [5.75,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "top", '150px'],
                ["style", "clip", [0,119,120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '175px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid1972", tween: [ "style", "${_btn_iniciar2}", "left", '593px', { fromValue: '505px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1950", tween: [ "transform", "${_icons-a}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid1974", tween: [ "style", "${_btn_iniciar2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1978", tween: [ "transform", "${_btn_iniciar2}", "scaleY", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1966", tween: [ "style", "${_TextCopy}", "left", '295px', { fromValue: '262px'}], position: 1298, duration: 597, easing: "easeOutBack" },
                { id: "eid1954", tween: [ "style", "${_Rectangle8}", "width", '414px', { fromValue: '0px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid1976", tween: [ "transform", "${_btn_iniciar2}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1970", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 1298, duration: 597, easing: "easeOutBack" },
                { id: "eid1952", tween: [ "transform", "${_icons-a}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid1968", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 597, easing: "easeOutBack" },
                { id: "eid1964", tween: [ "style", "${_Text}", "left", '295px', { fromValue: '262px'}], position: 1000, duration: 597, easing: "easeOutBack" }            ]
        }
    }
},
"slide_4": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'btn_iniciar2',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['593', '357px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['266px', '174px', '414px', '73px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'Rectangle8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,66,104,1.00)']
                },
                {
                    rect: ['295px', '182px', '224px', '30px', 'auto', 'auto'],
                    id: 'TextCopy3',
                    text: 'Actividad Interactiva',
                    font: ['Arial, Helvetica, sans-serif', 22, 'rgba(255,255,255,1.00)', '100', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['295px', '206px', '431px', '30px', 'auto', 'auto'],
                    id: 'TextCopy2',
                    text: 'Agronomía, veterinaria y afines',
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '900', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['175px', '150px', '1044px', '120px', 'auto', 'auto'],
                    id: 'icons-a',
                    type: 'image',
                    clip: ['rect(0px 119px 120px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/icons-a.png', '-580.0009765625px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'btn_iniciar2',
                symbolName: 'btn_iniciar',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '182px'],
                ["style", "width", '224px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '262px'],
                ["style", "font-size", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px']
            ],
            "${_btn_iniciar2}": [
                ["style", "top", '357px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '505px'],
                ["style", "cursor", 'pointer']
            ],
            "${_TextCopy2}": [
                ["style", "top", '206px'],
                ["style", "height", '30px'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '262px'],
                ["style", "width", '431px']
            ],
            "${_icons-a}": [
                ["style", "top", '150px'],
                ["style", "background-position", [-580.0009765625,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0'],
                ["style", "left", '175px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "clip", [0,119,120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [5.75,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Rectangle8}": [
                ["color", "background-color", 'rgba(0,66,104,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '0px'],
                ["style", "top", '174px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '73px'],
                ["style", "left", '266px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            timeline: [
                { id: "eid1989", tween: [ "style", "${_btn_iniciar2}", "left", '593px', { fromValue: '505px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1991", tween: [ "style", "${_btn_iniciar2}", "left", '477px', { fromValue: '593px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid1980", tween: [ "transform", "${_icons-a}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid1984", tween: [ "style", "${_TextCopy3}", "left", '295px', { fromValue: '262px'}], position: 1000, duration: 597, easing: "easeOutBack" },
                { id: "eid2000", tween: [ "style", "${_TextCopy3}", "left", '332px', { fromValue: '295px'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid2009", tween: [ "style", "${_Rectangle8}", "left", '297px', { fromValue: '266px'}], position: 3000, duration: 750, easing: "easeOutBack" },
                { id: "eid2012", tween: [ "style", "${_icons-a}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 750, easing: "easeOutBack" },
                { id: "eid1985", tween: [ "style", "${_TextCopy3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 597, easing: "easeOutBack" },
                { id: "eid1994", tween: [ "style", "${_TextCopy3}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid1988", tween: [ "style", "${_btn_iniciar2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1992", tween: [ "style", "${_btn_iniciar2}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid1990", tween: [ "transform", "${_btn_iniciar2}", "scaleY", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1982", tween: [ "style", "${_TextCopy2}", "left", '295px', { fromValue: '262px'}], position: 1298, duration: 597, easing: "easeOutBack" },
                { id: "eid1999", tween: [ "style", "${_TextCopy2}", "left", '332px', { fromValue: '295px'}], position: 3250, duration: 500, easing: "easeOutBack" },
                { id: "eid1986", tween: [ "style", "${_Rectangle8}", "width", '460px', { fromValue: '0px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2010", tween: [ "style", "${_icons-a}", "left", '206px', { fromValue: '175px'}], position: 3250, duration: 750, easing: "easeOutBack" },
                { id: "eid2011", tween: [ "style", "${_Rectangle8}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 750, easing: "easeOutBack" },
                { id: "eid1981", tween: [ "transform", "${_icons-a}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid1987", tween: [ "transform", "${_btn_iniciar2}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1983", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 1298, duration: 597, easing: "easeOutBack" },
                { id: "eid1993", tween: [ "style", "${_TextCopy2}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 500, easing: "easeOutBack" }            ]
        }
    }
},
"slide_5": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Hot_Spot": {
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
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '40px', '40px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "width", '40px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,0.35)'],
                ["style", "height", '40px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            labels: {
                "iniciar": 0,
                "loop": 2000
            },
            timeline: [
                { id: "eid694", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(255,255,255,0.35)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.35)'}], position: 1000, duration: 0 },
                { id: "eid695", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid696", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeInQuad" }            ]
        }
    }
},
"slide_7": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_8": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_10": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_11": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_12": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_13": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['11px', '21px', '958px', '538px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "height", '538px'],
                ["style", "top", '21px'],
                ["style", "left", '11px'],
                ["style", "width", '958px']
            ],
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_14": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_15": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_16": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_17": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_18": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_19": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_20": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_21": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_22": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['11px', '21px', '958px', '538px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "top", '21px'],
                ["style", "height", '538px'],
                ["style", "left", '11px'],
                ["style", "width", '958px']
            ],
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_23": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_24": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_25": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_26": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_27": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_28": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_29": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_30": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['53px', '160px', '531px', '343px', 'auto', 'auto'],
                    id: 'final',
                    type: 'image',
                    clip: ['rect(243.54833984375px 237.451171875px 343px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/final.png', '0px', '0px']
                },
                {
                    rect: ['419px', '160px', '531px', '343px', 'auto', 'auto'],
                    id: 'finalCopy3',
                    type: 'image',
                    clip: ['rect(240.322265625px 531px 343px 324.193359375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/final.png', '0px', '0px']
                },
                {
                    rect: ['242px', '147px', '531px', '343px', 'auto', 'auto'],
                    type: 'image',
                    id: 'finalCopy',
                    cursor: ['pointer'],
                    clip: ['rect(132.2578125px 429.38671875px 247.8388671875px 100px)'],
                    fill: ['rgba(0,0,0,0)', 'images/final.png', '0px', '0px']
                },
                {
                    rect: ['242px', '94px', '531px', '343px', 'auto', 'auto'],
                    id: 'finalCopy2',
                    type: 'image',
                    clip: ['rect(9.677734375px 531px 130.0966796875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/final.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_final}": [
                ["style", "top", '250px'],
                ["style", "left", '53px'],
                ["style", "clip", [243.54833984375,237.451171875,247.8388671875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_finalCopy}": [
                ["style", "top", '147px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "clip", [132.2578125,429.38671875,247.8388671875,100], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '242px']
            ],
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ],
            "${_finalCopy2}": [
                ["style", "top", '-11px'],
                ["style", "opacity", '0'],
                ["style", "left", '242px'],
                ["style", "clip", [9.677734375,531,130.0966796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_finalCopy3}": [
                ["style", "top", '250px'],
                ["style", "left", '419px'],
                ["style", "clip", [240.322265625,531,241.38720703125,324.193359375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid2034", tween: [ "style", "${_final}", "top", '160px', { fromValue: '250px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2030", tween: [ "transform", "${_finalCopy}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 750, easing: "easeOutBack" },
                { id: "eid2028", tween: [ "style", "${_finalCopy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid2036", tween: [ "style", "${_finalCopy3}", "top", '160px', { fromValue: '250px'}], position: 750, duration: 750, easing: "easeOutBack" },
                { id: "eid2040", tween: [ "style", "${_final}", "clip", [243.54833984375,237.451171875,343,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [243.54833984375,237.451171875,247.8388671875,0]}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2038", tween: [ "style", "${_finalCopy3}", "clip", [240.322265625,531,343,324.193359375], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [240.322265625,531,241.38720703125,324.193359375]}], position: 750, duration: 750, easing: "easeOutBack" },
                { id: "eid2026", tween: [ "style", "${_finalCopy2}", "top", '94px', { fromValue: '-11px'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid2032", tween: [ "transform", "${_finalCopy}", "scaleY", '1', { fromValue: '0'}], position: 1500, duration: 750, easing: "easeOutBack" }            ]
        }
    }
},
"home": {
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
                    type: 'image',
                    id: 'home_up',
                    rect: ['0px', '0px', '117px', '115px', 'auto', 'auto'],
                    clip: ['rect(0px 54.6005859375px 57.39990234375px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/home.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'home',
                    rect: ['0px', '0px', '117px', '115px', 'auto', 'auto'],
                    clip: ['rect(62.39990234375px 50.599609375px 115px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/home.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_home}": [
                ["style", "top", '-61px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [62.39990234375,50.599609375,115,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_home_up}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "clip", [0,54.6005859375,57.39990234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "width", '54px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            labels: {
                "up": 0,
                "down": 500
            },
            timeline: [
                { id: "eid1762", tween: [ "style", "${_home}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid1761", tween: [ "style", "${_home_up}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1298", tween: [ "style", "${_home}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1760", tween: [ "style", "${_home}", "top", '-61px', { fromValue: '-61px'}], position: 0, duration: 0 },
                { id: "eid1299", tween: [ "style", "${_home}", "top", '-61px', { fromValue: '-61px'}], position: 500, duration: 0 }            ]
        }
    }
},
"slide_31": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_32": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_33": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_34": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_35": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_36": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_37": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_38": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_39": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_40": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_41": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_42": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_43": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_44": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_45": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_46": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_47": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_48": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_49": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_100": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"slide_101": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"guia": {
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
                    id: 'bt_off',
                    type: 'image',
                    rect: ['-102px', '0', '202px', '102px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bt.png', '0px', '0px']
                },
                {
                    id: 'bt_on',
                    type: 'image',
                    rect: ['-102px', '0', '202px', '102px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bt.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bt_on}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '-102px']
            ],
            "${_bt_off}": [
                ["style", "top", '-52px'],
                ["style", "opacity", '0'],
                ["style", "left", '-102px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '100px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            labels: {
                "up": 0,
                "down": 500
            },
            timeline: [
                { id: "eid1763", tween: [ "style", "${_bt_off}", "top", '-52px', { fromValue: '-52px'}], position: 0, duration: 0 },
                { id: "eid1767", tween: [ "style", "${_bt_on}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1764", tween: [ "style", "${_bt_off}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid1765", tween: [ "style", "${_bt_on}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"mapa": {
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
                    id: 'bt_off',
                    type: 'image',
                    rect: ['0px', '0', '202px', '102px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bt.png', '0px', '0px']
                },
                {
                    id: 'bt_on',
                    type: 'image',
                    rect: ['0px', '0', '202px', '102px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bt.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bt_on}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '100px']
            ],
            "${_bt_off}": [
                ["style", "top", '-52px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            labels: {
                "up": 0,
                "down": 500
            },
            timeline: [
                { id: "eid1763", tween: [ "style", "${_bt_off}", "top", '-52px', { fromValue: '-52px'}], position: 0, duration: 0 },
                { id: "eid1767", tween: [ "style", "${_bt_on}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1765", tween: [ "style", "${_bt_on}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1764", tween: [ "style", "${_bt_off}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }            ]
        }
    }
},
"slide_1": {
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
                    rect: ['12px', '152px', '915px', '175px', 'auto', 'auto'],
                    id: 'mountains',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/mountains.png', '0px', '0px']
                },
                {
                    rect: ['685px', '91px', '244px', '194px', 'auto', 'auto'],
                    id: 'img-map19',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map19.png', '0px', '0px']
                },
                {
                    rect: ['775px', '218px', '111px', '94px', 'auto', 'auto'],
                    id: 'img-map18',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map18.png', '0px', '0px']
                },
                {
                    rect: ['657px', '219px', '198px', '279px', 'auto', 'auto'],
                    id: 'img-map17',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map17.png', '0px', '0px']
                },
                {
                    rect: ['624px', '227px', '198px', '198px', 'auto', 'auto'],
                    id: 'img-map16',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map16.png', '0px', '0px']
                },
                {
                    rect: ['626px', '207px', '158px', '131px', 'auto', 'auto'],
                    id: 'img-map15',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map15.png', '0px', '0px']
                },
                {
                    rect: ['592px', '198px', '80px', '142px', 'auto', 'auto'],
                    id: 'img-map14',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map14.png', '0px', '0px']
                },
                {
                    rect: ['595px', '122px', '222px', '144px', 'auto', 'auto'],
                    id: 'img-map13',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map13.png', '0px', '0px']
                },
                {
                    rect: ['585px', '351px', '132px', '222px', 'auto', 'auto'],
                    id: 'img-map12',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map12.png', '0px', '0px']
                },
                {
                    rect: ['469px', '304px', '232px', '220px', 'auto', 'auto'],
                    id: 'img-map11',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map11.png', '0px', '0px']
                },
                {
                    rect: ['478px', '229px', '200px', '134px', 'auto', 'auto'],
                    id: 'img-map10',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map10.png', '0px', '0px']
                },
                {
                    rect: ['504px', '206px', '124px', '70px', 'auto', 'auto'],
                    id: 'img-map9',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map9.png', '0px', '0px']
                },
                {
                    rect: ['478px', '129px', '180px', '114px', 'auto', 'auto'],
                    id: 'img-map8',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map8.png', '0px', '0px']
                },
                {
                    rect: ['347px', '248px', '206px', '322px', 'auto', 'auto'],
                    id: 'img-map7',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map7.png', '0px', '0px']
                },
                {
                    rect: ['396px', '196px', '142px', '145px', 'auto', 'auto'],
                    id: 'img-map6',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map6.png', '0px', '0px']
                },
                {
                    rect: ['301px', '216px', '167px', '105px', 'auto', 'auto'],
                    id: 'img-map4',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map4.png', '0px', '0px']
                },
                {
                    rect: ['258px', '262px', '238px', '300px', 'auto', 'auto'],
                    id: 'img-map3',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map3.png', '0px', '0px']
                },
                {
                    rect: ['75px', '220px', '328px', '290px', 'auto', 'auto'],
                    id: 'img-map2',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map2.png', '0px', '0px']
                },
                {
                    rect: ['34px', '136px', '355px', '185px', 'auto', 'auto'],
                    id: 'img-map1',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map1.png', '0px', '0px']
                },
                {
                    rect: ['296px', '159px', '245px', '106px', 'auto', 'auto'],
                    id: 'img-map5',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map5.png', '0px', '0px']
                },
                {
                    rect: ['2px', '153px', '890px', '356px', 'auto', 'auto'],
                    id: 'rutes-map',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/rutes-map.png', '0px', '0px']
                },
                {
                    id: 'pointer1',
                    type: 'image',
                    rect: ['751px', '200px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    id: 'pointer2',
                    type: 'image',
                    rect: ['751px', '260px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    id: 'pointer3',
                    type: 'image',
                    rect: ['739px', '338px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    id: 'pointer4',
                    type: 'image',
                    rect: ['448px', '432px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    id: 'Pointer5',
                    type: 'image',
                    rect: ['381px', '305px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    id: 'Pointer6',
                    type: 'image',
                    rect: ['294px', '202px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    id: 'pointer7',
                    type: 'image',
                    rect: ['243px', '397px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    id: 'pointer8',
                    type: 'image',
                    rect: ['133px', '306px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '980px', '580px', 'auto', 'auto'],
                    id: 'ch',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,0.40)']
                },
                {
                    rect: ['0px', '50px', '980px', '474px', 'auto', 'auto'],
                    id: 'bg0',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(121,194,203,1.00)']
                },
                {
                    id: 'bg32',
                    type: 'image',
                    rect: ['0px', 'auto', '980px', '298px', 'auto', '128px'],
                    fill: ['rgba(0,0,0,0)', 'images/bg3.png', '0px', '0px']
                },
                {
                    id: 'bg1',
                    type: 'image',
                    rect: ['-397px', '288px', '1612px', '155px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg1.png', '0px', '0px']
                },
                {
                    id: 'bg2',
                    type: 'image',
                    rect: ['-210px', 'auto', '1640px', '155px', 'auto', '86px'],
                    fill: ['rgba(0,0,0,0)', 'images/bg2.png', '0px', '0px']
                },
                {
                    rect: ['18px', '188px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'btnac1',
                    transform: [[], [], [], ['0.85', '0.85']],
                    cursor: ['pointer'],
                    type: 'rect'
                },
                {
                    id: 'btnc1',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['117', '63px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnac3',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['197', '231', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['1px', 'auto', '980px', '24px', 'auto', '59px'],
                    id: 'floor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,153,116,1.00)']
                },
                {
                    rect: ['2px', '494px', '980px', '5px', 'auto', 'auto'],
                    id: 'floorCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,128,95,1.00)']
                },
                {
                    rect: ['1px', '50px', '980px', '13px', 'auto', 'auto'],
                    boxShadow: ['', 0, 5, 5, 0, 'rgba(0,0,0,0.20)'],
                    id: 'p1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(116,73,0,1.00)', [270, [['rgba(116,73,0,1.00)', 0], ['rgba(172,108,0,1.00)', 100]]]]
                },
                {
                    rect: ['1px', '519px', '980px', '13px', 'auto', 'auto'],
                    boxShadow: ['', 0, -5, 5, 0, 'rgba(0,0,0,0.20)'],
                    id: 'p2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(116,73,0,1.00)', [90, [['rgba(116,73,0,1.00)', 0], ['rgba(172,108,0,1.00)', 100]]]]
                }
            ],
            symbolInstances: [
            {
                id: 'btnac1',
                symbolName: 'btnac1',
                autoPlay: {

               }
            },
            {
                id: 'btnc1',
                symbolName: 'btnc1',
                autoPlay: {

               }
            },
            {
                id: 'btnac3',
                symbolName: 'btnac3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_img-map11}": [
                ["style", "top", '304px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '469px']
            ],
            "${_Pointer6}": [
                ["transform", "scaleX", '0'],
                ["style", "top", '202px'],
                ["style", "left", '294px'],
                ["transform", "scaleY", '0']
            ],
            "${_floorCopy}": [
                ["style", "top", '494px'],
                ["transform", "scaleX", '0'],
                ["style", "height", '5px'],
                ["color", "background-color", 'rgba(0,128,95,1.00)'],
                ["style", "left", '2px']
            ],
            "${_btnc1}": [
                ["style", "top", '88px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_img-map7}": [
                ["style", "top", '248px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '347px']
            ],
            "${_btnac3}": [
                ["style", "top", '273px'],
                ["style", "opacity", '0'],
                ["style", "left", '196px'],
                ["style", "cursor", 'pointer']
            ],
            "${_bg32}": [
                ["style", "top", 'auto'],
                ["style", "height", '0px'],
                ["style", "left", '0px'],
                ["style", "bottom", '69px']
            ],
            "${_img-map14}": [
                ["style", "top", '198px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '592px']
            ],
            "${_img-map15}": [
                ["style", "top", '207px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '626px']
            ],
            "${_img-map2}": [
                ["style", "top", '220px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '75px']
            ],
            "${_img-map6}": [
                ["style", "top", '196px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '396px']
            ],
            "${_img-map3}": [
                ["style", "top", '262px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '258px']
            ],
            "${_pointer1}": [
                ["transform", "scaleX", '0'],
                ["style", "top", '200px'],
                ["style", "left", '751px'],
                ["transform", "scaleY", '0']
            ],
            "${_p2}": [
                ["color", "background-color", 'rgba(116,73,0,1.00)'],
                ["subproperty", "boxShadow.blur", '5px'],
                ["transform", "scaleX", '0'],
                ["gradient", "background-image", [90,[['rgba(116,73,0,1.00)',0],['rgba(172,108,0,1.00)',100]]]],
                ["style", "left", '1px'],
                ["style", "top", '291px'],
                ["style", "height", '13px'],
                ["subproperty", "boxShadow.offsetV", '-5px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.20)']
            ],
            "${_img-map12}": [
                ["style", "top", '351px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '585px']
            ],
            "${_pointer2}": [
                ["transform", "scaleX", '0'],
                ["style", "top", '260px'],
                ["style", "left", '751px'],
                ["transform", "scaleY", '0']
            ],
            "${_img-map13}": [
                ["style", "top", '122px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '595px']
            ],
            "${_img-map1}": [
                ["style", "top", '136px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '34px']
            ],
            "${_mountains}": [
                ["style", "top", '201px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '12px']
            ],
            "${_img-map16}": [
                ["style", "top", '227px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '624px']
            ],
            "${_img-map19}": [
                ["style", "top", '91px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '685px']
            ],
            "${_floor}": [
                ["color", "background-color", 'rgba(0,153,116,1.00)'],
                ["style", "height", '0px'],
                ["style", "top", 'auto'],
                ["style", "bottom", '59px']
            ],
            "${_img-map10}": [
                ["style", "top", '229px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '478px']
            ],
            "${_img-map9}": [
                ["style", "top", '206px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '504px']
            ],
            "${_pointer3}": [
                ["transform", "scaleX", '0'],
                ["style", "top", '338px'],
                ["style", "left", '739px'],
                ["transform", "scaleY", '0']
            ],
            "${_rutes-map}": [
                ["style", "top", '153px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '2px']
            ],
            "${_pointer7}": [
                ["transform", "scaleX", '0'],
                ["style", "top", '397px'],
                ["style", "left", '243px'],
                ["transform", "scaleY", '0']
            ],
            "${_pointer8}": [
                ["transform", "scaleX", '0'],
                ["style", "top", '306px'],
                ["style", "left", '133px'],
                ["transform", "scaleY", '0']
            ],
            "${_p1}": [
                ["color", "background-color", 'rgba(116,73,0,1.00)'],
                ["subproperty", "boxShadow.blur", '5px'],
                ["transform", "scaleX", '0'],
                ["gradient", "background-image", [270,[['rgba(116,73,0,1.00)',0],['rgba(172,108,0,1.00)',100]]]],
                ["style", "left", '1px'],
                ["style", "top", '277px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["style", "height", '13px'],
                ["subproperty", "boxShadow.offsetV", '5px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.20)']
            ],
            "${_img-map17}": [
                ["style", "top", '219px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '657px']
            ],
            "${_bg2}": [
                ["style", "top", 'auto'],
                ["style", "height", '0px'],
                ["style", "left", '-210px'],
                ["style", "bottom", '86px']
            ],
            "${_bg1}": [
                ["style", "top", '338px'],
                ["style", "opacity", '0'],
                ["style", "left", '-396px']
            ],
            "${_img-map18}": [
                ["style", "top", '218px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '775px']
            ],
            "${_img-map4}": [
                ["style", "top", '216px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '301px']
            ],
            "${_img-map5}": [
                ["style", "top", '159px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '296px']
            ],
            "${_btnac1}": [
                ["style", "top", '213px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '18px']
            ],
            "${_pointer4}": [
                ["transform", "scaleX", '0'],
                ["style", "top", '432px'],
                ["style", "left", '448px'],
                ["transform", "scaleY", '0']
            ],
            "${_Pointer5}": [
                ["transform", "scaleX", '0'],
                ["style", "top", '305px'],
                ["style", "left", '381px'],
                ["transform", "scaleY", '0']
            ],
            "${_ch}": [
                ["transform", "scaleX", '0.1'],
                ["transform", "scaleY", '0'],
                ["color", "background-color", 'rgba(0,0,0,0.40)']
            ],
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ],
            "${_bg0}": [
                ["color", "background-color", 'rgba(121,194,203,1.00)'],
                ["transform", "scaleY", '0']
            ],
            "${_img-map8}": [
                ["style", "top", '129px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '478px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: true,
            timeline: [
                { id: "eid1941", tween: [ "style", "${_btnac1}", "top", '209px', { fromValue: '213px'}], position: 5750, duration: 750, easing: "easeOutBack" },
                { id: "eid1829", tween: [ "transform", "${_img-map13}", "scaleX", '0.8', { fromValue: '0.1'}], position: 865, duration: 500, easing: "easeOutBack" },
                { id: "eid1943", tween: [ "style", "${_btnac1}", "opacity", '1', { fromValue: '0'}], position: 5750, duration: 750, easing: "easeOutBack" },
                { id: "eid1786", tween: [ "transform", "${_pointer2}", "scaleX", '1', { fromValue: '0'}], position: 1800, duration: 500, easing: "easeOutBack" },
                { id: "eid1789", tween: [ "transform", "${_pointer1}", "scaleY", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid1830", tween: [ "style", "${_img-map13}", "opacity", '1', { fromValue: '0'}], position: 865, duration: 500, easing: "easeOutBack" },
                { id: "eid1828", tween: [ "transform", "${_img-map12}", "scaleY", '0.8', { fromValue: '0.1'}], position: 940, duration: 500, easing: "easeOutBack" },
                { id: "eid1825", tween: [ "transform", "${_img-map11}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid1804", tween: [ "transform", "${_img-map3}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1440, duration: 500, easing: "easeOutBack" },
                { id: "eid1803", tween: [ "style", "${_img-map3}", "opacity", '1', { fromValue: '0'}], position: 1440, duration: 500, easing: "easeOutBack" },
                { id: "eid1832", tween: [ "transform", "${_img-map14}", "scaleX", '0.8', { fromValue: '0.1'}], position: 800, duration: 500, easing: "easeOutBack" },
                { id: "eid1846", tween: [ "transform", "${_img-map18}", "scaleY", '0.8', { fromValue: '0.1'}], position: 555, duration: 500, easing: "easeOutBack" },
                { id: "eid1779", tween: [ "transform", "${_Pointer6}", "scaleY", '1', { fromValue: '0'}], position: 2055, duration: 500, easing: "easeOutBack" },
                { id: "eid1822", tween: [ "transform", "${_img-map10}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1055, duration: 500, easing: "easeOutBack" },
                { id: "eid1839", tween: [ "style", "${_img-map16}", "opacity", '1', { fromValue: '0'}], position: 675, duration: 500, easing: "easeOutBack" },
                { id: "eid1821", tween: [ "style", "${_img-map10}", "opacity", '1', { fromValue: '0'}], position: 1055, duration: 500, easing: "easeOutBack" },
                { id: "eid1827", tween: [ "style", "${_img-map12}", "opacity", '1', { fromValue: '0'}], position: 940, duration: 500, easing: "easeOutBack" },
                { id: "eid1775", tween: [ "transform", "${_pointer8}", "scaleY", '1', { fromValue: '0'}], position: 2170, duration: 500, easing: "easeOutBack" },
                { id: "eid1790", tween: [ "transform", "${_rutes-map}", "scaleX", '0.78', { fromValue: '1'}], position: 1500, duration: 620, easing: "easeOutBack" },
                { id: "eid2063", tween: [ "style", "${_btnac3}", "top", '231px', { fromValue: '273px'}], position: 6250, duration: 750, easing: "easeOutBack" },
                { id: "eid1817", tween: [ "transform", "${_img-map9}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1120, duration: 500, easing: "easeOutBack" },
                { id: "eid1819", tween: [ "transform", "${_img-map9}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1120, duration: 500, easing: "easeOutBack" },
                { id: "eid2046", tween: [ "style", "${_btnc1}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 750, easing: "easeOutSine" },
                { id: "eid2044", tween: [ "style", "${_btnc1}", "top", '63px', { fromValue: '88px'}], position: 6000, duration: 750, easing: "easeOutSine" },
                { id: "eid1831", tween: [ "transform", "${_img-map13}", "scaleY", '0.8', { fromValue: '0.1'}], position: 865, duration: 500, easing: "easeOutBack" },
                { id: "eid1923", tween: [ "style", "${_bg32}", "height", '298px', { fromValue: '0px'}], position: 5250, duration: 750, easing: "easeOutBack" },
                { id: "eid1850", tween: [ "style", "${_mountains}", "top", '73px', { fromValue: '201px'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid1778", tween: [ "transform", "${_Pointer6}", "scaleX", '1', { fromValue: '0'}], position: 2055, duration: 500, easing: "easeOutBack" },
                { id: "eid1919", tween: [ "style", "${_bg1}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 637, easing: "easeOutBack" },
                { id: "eid1842", tween: [ "style", "${_img-map17}", "opacity", '1', { fromValue: '0'}], position: 620, duration: 500, easing: "easeOutBack" },
                { id: "eid1809", tween: [ "style", "${_img-map6}", "opacity", '1', { fromValue: '0'}], position: 1300, duration: 500, easing: "easeOutBack" },
                { id: "eid1891", tween: [ "transform", "${_p1}", "scaleX", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeOutSine" },
                { id: "eid1911", tween: [ "style", "${_bg2}", "height", '155px', { fromValue: '0px'}], position: 4500, duration: 750, easing: "easeOutBack" },
                { id: "eid1800", tween: [ "style", "${_img-map2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeOutBack" },
                { id: "eid1818", tween: [ "style", "${_img-map9}", "opacity", '1', { fromValue: '0'}], position: 1120, duration: 500, easing: "easeOutBack" },
                { id: "eid1788", tween: [ "transform", "${_pointer1}", "scaleX", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid1805", tween: [ "transform", "${_img-map4}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1365, duration: 500, easing: "easeOutBack" },
                { id: "eid1783", tween: [ "transform", "${_pointer4}", "scaleY", '1', { fromValue: '0'}], position: 1940, duration: 500, easing: "easeOutBack" },
                { id: "eid1836", tween: [ "style", "${_img-map15}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid1901", tween: [ "style", "${_floor}", "height", '24px', { fromValue: '0px'}], position: 4000, duration: 500, easing: "easeOutBack" },
                { id: "eid1837", tween: [ "transform", "${_img-map15}", "scaleY", '0.8', { fromValue: '0.1'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid1780", tween: [ "transform", "${_Pointer5}", "scaleX", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1883", tween: [ "style", "${_p1}", "top", '50px', { fromValue: '277px'}], position: 3500, duration: 500, easing: "easeOutSine" },
                { id: "eid1895", tween: [ "transform", "${_bg0}", "scaleY", '1', { fromValue: '0'}], position: 3500, duration: 500, easing: "easeOutSine" },
                { id: "eid1917", tween: [ "style", "${_bg1}", "top", '288px', { fromValue: '338px'}], position: 5000, duration: 637, easing: "easeOutBack" },
                { id: "eid1879", tween: [ "style", "${_p2}", "top", '519px', { fromValue: '291px'}], position: 3500, duration: 500, easing: "easeOutSine" },
                { id: "eid1889", tween: [ "transform", "${_p2}", "scaleX", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeOutSine" },
                { id: "eid2065", tween: [ "style", "${_btnac3}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 750, easing: "easeOutBack" },
                { id: "eid1873", tween: [ "transform", "${_ch}", "scaleY", '1', { fromValue: '0'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid1794", tween: [ "style", "${_img-map5}", "opacity", '1', { fromValue: '0'}], position: 1620, duration: 500, easing: "easeOutBack" },
                { id: "eid1871", tween: [ "transform", "${_ch}", "scaleX", '1', { fromValue: '0.1'}], position: 2750, duration: 500, easing: "easeOutBack" },
                { id: "eid1924", tween: [ "style", "${_bg32}", "bottom", '128px', { fromValue: '69px'}], position: 5250, duration: 750, easing: "easeOutBack" },
                { id: "eid1791", tween: [ "style", "${_rutes-map}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 620, easing: "easeOutBack" },
                { id: "eid1843", tween: [ "transform", "${_img-map17}", "scaleY", '0.8', { fromValue: '0.1'}], position: 620, duration: 500, easing: "easeOutBack" },
                { id: "eid1798", tween: [ "transform", "${_img-map1}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1555, duration: 500, easing: "easeOutBack" },
                { id: "eid1793", tween: [ "transform", "${_img-map5}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1620, duration: 500, easing: "easeOutBack" },
                { id: "eid1801", tween: [ "transform", "${_img-map2}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1500, duration: 500, easing: "easeOutBack" },
                { id: "eid1851", tween: [ "style", "${_mountains}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid1812", tween: [ "style", "${_img-map7}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeOutBack" },
                { id: "eid1835", tween: [ "transform", "${_img-map15}", "scaleX", '0.8', { fromValue: '0.1'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid1774", tween: [ "transform", "${_pointer8}", "scaleX", '1', { fromValue: '0'}], position: 2170, duration: 500, easing: "easeOutBack" },
                { id: "eid1806", tween: [ "style", "${_img-map4}", "opacity", '1', { fromValue: '0'}], position: 1365, duration: 500, easing: "easeOutBack" },
                { id: "eid1833", tween: [ "style", "${_img-map14}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 500, easing: "easeOutBack" },
                { id: "eid1823", tween: [ "transform", "${_img-map11}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid1797", tween: [ "style", "${_img-map1}", "opacity", '1', { fromValue: '0'}], position: 1555, duration: 500, easing: "easeOutBack" },
                { id: "eid1807", tween: [ "transform", "${_img-map4}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1365, duration: 500, easing: "easeOutBack" },
                { id: "eid1787", tween: [ "transform", "${_pointer2}", "scaleY", '1', { fromValue: '0'}], position: 1800, duration: 500, easing: "easeOutBack" },
                { id: "eid1811", tween: [ "transform", "${_img-map7}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1250, duration: 500, easing: "easeOutBack" },
                { id: "eid1792", tween: [ "transform", "${_rutes-map}", "scaleY", '0.78', { fromValue: '1'}], position: 1500, duration: 620, easing: "easeOutBack" },
                { id: "eid1820", tween: [ "transform", "${_img-map10}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1055, duration: 500, easing: "easeOutBack" },
                { id: "eid1845", tween: [ "style", "${_img-map18}", "opacity", '1', { fromValue: '0'}], position: 555, duration: 500, easing: "easeOutBack" },
                { id: "eid1810", tween: [ "transform", "${_img-map6}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1300, duration: 500, easing: "easeOutBack" },
                { id: "eid1799", tween: [ "transform", "${_img-map2}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1500, duration: 500, easing: "easeOutBack" },
                { id: "eid1848", tween: [ "style", "${_img-map19}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid1815", tween: [ "style", "${_img-map8}", "opacity", '1', { fromValue: '0'}], position: 1175, duration: 500, easing: "easeOutBack" },
                { id: "eid1777", tween: [ "transform", "${_pointer7}", "scaleY", '1', { fromValue: '0'}], position: 2120, duration: 500, easing: "easeOutBack" },
                { id: "eid1813", tween: [ "transform", "${_img-map7}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1250, duration: 500, easing: "easeOutBack" },
                { id: "eid1784", tween: [ "transform", "${_pointer3}", "scaleX", '1', { fromValue: '0'}], position: 1865, duration: 500, easing: "easeOutBack" },
                { id: "eid1849", tween: [ "transform", "${_img-map19}", "scaleY", '0.8', { fromValue: '0.1'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid1903", tween: [ "transform", "${_floorCopy}", "scaleX", '1', { fromValue: '0'}], position: 4250, duration: 500, easing: "easeOutBack" },
                { id: "eid1841", tween: [ "transform", "${_img-map17}", "scaleX", '0.8', { fromValue: '0.1'}], position: 620, duration: 500, easing: "easeOutBack" },
                { id: "eid1781", tween: [ "transform", "${_Pointer5}", "scaleY", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1824", tween: [ "style", "${_img-map11}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid1796", tween: [ "transform", "${_img-map1}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1555, duration: 500, easing: "easeOutBack" },
                { id: "eid1826", tween: [ "transform", "${_img-map12}", "scaleX", '0.8', { fromValue: '0.1'}], position: 940, duration: 500, easing: "easeOutBack" },
                { id: "eid1844", tween: [ "transform", "${_img-map18}", "scaleX", '0.8', { fromValue: '0.1'}], position: 555, duration: 500, easing: "easeOutBack" },
                { id: "eid1776", tween: [ "transform", "${_pointer7}", "scaleX", '1', { fromValue: '0'}], position: 2120, duration: 500, easing: "easeOutBack" },
                { id: "eid1795", tween: [ "transform", "${_img-map5}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1620, duration: 500, easing: "easeOutBack" },
                { id: "eid1785", tween: [ "transform", "${_pointer3}", "scaleY", '1', { fromValue: '0'}], position: 1865, duration: 500, easing: "easeOutBack" },
                { id: "eid1834", tween: [ "transform", "${_img-map14}", "scaleY", '0.8', { fromValue: '0.1'}], position: 800, duration: 500, easing: "easeOutBack" },
                { id: "eid1808", tween: [ "transform", "${_img-map6}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1300, duration: 500, easing: "easeOutBack" },
                { id: "eid1816", tween: [ "transform", "${_img-map8}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1175, duration: 500, easing: "easeOutBack" },
                { id: "eid1838", tween: [ "transform", "${_img-map16}", "scaleX", '0.8', { fromValue: '0.1'}], position: 675, duration: 500, easing: "easeOutBack" },
                { id: "eid1802", tween: [ "transform", "${_img-map3}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1440, duration: 500, easing: "easeOutBack" },
                { id: "eid1847", tween: [ "transform", "${_img-map19}", "scaleX", '0.8', { fromValue: '0.1'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid1814", tween: [ "transform", "${_img-map8}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1175, duration: 500, easing: "easeOutBack" },
                { id: "eid1915", tween: [ "style", "${_bg1}", "left", '-397px', { fromValue: '-396px'}], position: 5000, duration: 637, easing: "easeOutBack" },
                { id: "eid1840", tween: [ "transform", "${_img-map16}", "scaleY", '0.8', { fromValue: '0.1'}], position: 675, duration: 500, easing: "easeOutBack" },
                { id: "eid1782", tween: [ "transform", "${_pointer4}", "scaleX", '1', { fromValue: '0'}], position: 1940, duration: 500, easing: "easeOutBack" }            ]
        }
    }
},
"btnac1": {
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
                    rect: ['-5px', 'auto', '110px', '306px', 'auto', '-20px'],
                    transform: [[], [], [], ['0.9', '0.9']],
                    id: 'ac1',
                    type: 'image',
                    clip: ['rect(96px 110px 306px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/ac1.png', '0px', '0px']
                },
                {
                    rect: ['-5px', '21px', '110px', '306px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.9', '0.9']],
                    id: 'ac1b',
                    type: 'image',
                    clip: ['rect(0px 110px 98px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/ac1.png', '0px', '2.2222222222222px']
                },
                {
                    rect: ['0px', '0px', '99px', '306px', 'auto', 'auto'],
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ac1}": [
                ["style", "top", 'auto'],
                ["transform", "scaleY", '0.9'],
                ["style", "bottom", '-20px'],
                ["transform", "scaleX", '0.9'],
                ["style", "left", '-5px'],
                ["style", "clip", [96,110,306,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '306px'],
                ["style", "width", '99px']
            ],
            "${_Rectangle6}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)']
            ],
            "${_ac1b}": [
                ["style", "top", '21px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "background-position", [0,2.2222222222222], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-5px'],
                ["style", "clip", [0,110,98,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid1936", tween: [ "style", "${_ac1b}", "top", '-15px', { fromValue: '21px'}], position: 0, duration: 500, easing: "easeOutSine" },
                { id: "eid1939", tween: [ "style", "${_ac1b}", "top", '21px', { fromValue: '-15px'}], position: 500, duration: 500, easing: "easeOutSine" }            ]
        }
    }
},
"btn_iniciar": {
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
                    rect: ['-1px', '-83px', '288px', '167px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.95', '0.95']],
                    id: 'btnsCopy3',
                    type: 'image',
                    clip: ['rect(85px 209px 167px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/btns.png', '0px', '0px']
                },
                {
                    rect: ['-39px', '-85px', '288px', '167px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.95', '0.95']],
                    id: 'btnsCopy2',
                    type: 'image',
                    clip: ['rect(85px 288px 167px 205px)'],
                    fill: ['rgba(0,0,0,0)', 'images/btns.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '255px', '83px', 'auto', 'auto'],
                    id: 'Rectangle9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnsCopy2}": [
                ["style", "top", '-85px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "-webkit-transform-origin", [87.06,76.54], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [87.06,76.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [87.06,76.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [87.06,76.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [87.06,76.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [87.06,76.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [85,288,167,205], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-39px']
            ],
            "${_Rectangle9}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '255px']
            ],
            "${_btnsCopy3}": [
                ["style", "top", '-83px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "clip", [85,209,167,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid1945", tween: [ "style", "${_btnsCopy2}", "left", '-31px', { fromValue: '-39px'}], position: 2000, duration: 500, easing: "easeOutSine" },
                { id: "eid1948", tween: [ "style", "${_btnsCopy2}", "left", '-39px', { fromValue: '-31px'}], position: 2500, duration: 500, easing: "easeOutSine" }            ]
        }
    }
},
"btn_home": {
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
                    rect: ['2px', '-6px', '56px', '495px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.92', '0.92']],
                    id: 'icons_home',
                    type: 'image',
                    clip: ['rect(4.34782600402832px 56px 56.73891830444336px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/icons_home.png', '0px', '-271.19565217392px']
                },
                {
                    rect: ['36px', '-5px', '158px', '60px', 'auto', 'auto'],
                    id: 'label_home',
                    transform: [[], [], [], ['0.65', '0.65']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/label_home.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '170px', '50px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '170px']
            ],
            "${_icons_home}": [
                ["style", "top", '-6px'],
                ["transform", "scaleY", '0'],
                ["style", "background-position", [0,-271.19565217392], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "-webkit-transform-origin", [51.94,6.19], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '2px'],
                ["style", "clip", [4.34782600402832,56,56.73891830444336,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Rectangle11}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)']
            ],
            "${_label_home}": [
                ["style", "top", '29px'],
                ["transform", "scaleY", '0.65'],
                ["style", "overflow", 'hidden'],
                ["transform", "scaleX", '0.65'],
                ["style", "opacity", '0'],
                ["style", "left", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: true,
            timeline: [
                { id: "eid2017", tween: [ "style", "${_label_home}", "top", '-5px', { fromValue: '29px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2019", tween: [ "style", "${_label_home}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2015", tween: [ "style", "${_label_home}", "left", '36px', { fromValue: '40px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2021", tween: [ "transform", "${_icons_home}", "scaleX", '0.92', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid2023", tween: [ "transform", "${_icons_home}", "scaleY", '0.92', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" }            ]
        }
    }
},
"btnc1": {
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
                    rect: ['-7px', '-11px', '93px', '478px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.85', '0.85']],
                    id: '_2',
                    type: 'image',
                    clip: ['rect(97.64705657958984px 93px 478px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2.png', '0px', '0px']
                },
                {
                    rect: ['-7px', '-5px', '93px', '478px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.85', '0.85']],
                    id: '_2Copy',
                    type: 'image',
                    clip: ['rect(0px 93px 95.64705657958984px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '79px', '431px', 'auto', 'auto'],
                    id: 'Hotspot',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hotspot}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '431px'],
                ["style", "width", '79px']
            ],
            "${__2Copy}": [
                ["style", "top", '-5px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "left", '-7px'],
                ["style", "clip", [0,93,95.64705657958984,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__2}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "left", '-7px'],
                ["style", "clip", [97.64705657958984,93,478,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid2041", tween: [ "style", "${__2Copy}", "top", '-36px', { fromValue: '-5px'}], position: 0, duration: 500, easing: "easeOutSine" },
                { id: "eid2042", tween: [ "style", "${__2Copy}", "top", '-5px', { fromValue: '-36px'}], position: 500, duration: 500, easing: "easeOutSine" }            ]
        }
    }
},
"slide_6": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'btn_iniciar2',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['593', '357px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['266px', '174px', '414px', '73px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'Rectangle8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,66,104,1.00)']
                },
                {
                    rect: ['295px', '182px', '224px', '30px', 'auto', 'auto'],
                    id: 'TextCopy3',
                    text: 'Actividad Interactiva',
                    font: ['Arial, Helvetica, sans-serif', 22, 'rgba(255,255,255,1.00)', '100', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['295px', '206px', '431px', '30px', 'auto', 'auto'],
                    id: 'TextCopy2',
                    text: 'Bellas artes',
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '900', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['175px', '150px', '1044px', '120px', 'auto', 'auto'],
                    id: 'icons-a',
                    type: 'image',
                    clip: ['rect(0px 119px 120px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/icons-a.png', '-349.0009765625px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'btn_iniciar2',
                symbolName: 'btn_iniciar',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '182px'],
                ["style", "font-size", '22px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '262px'],
                ["style", "width", '224px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '206px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '262px'],
                ["style", "width", '431px']
            ],
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px']
            ],
            "${_icons-a}": [
                ["style", "top", '150px'],
                ["style", "-webkit-transform-origin", [5.75,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "clip", [0,119,120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "background-position", [-349.0009765625,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '175px']
            ],
            "${_btn_iniciar2}": [
                ["style", "top", '357px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '505px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle8}": [
                ["color", "background-color", 'rgba(0,66,104,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '0px'],
                ["style", "top", '174px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '73px'],
                ["style", "left", '266px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            timeline: [
                { id: "eid1989", tween: [ "style", "${_btn_iniciar2}", "left", '593px', { fromValue: '505px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1991", tween: [ "style", "${_btn_iniciar2}", "left", '477px', { fromValue: '593px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid1980", tween: [ "transform", "${_icons-a}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid1984", tween: [ "style", "${_TextCopy3}", "left", '295px', { fromValue: '262px'}], position: 1000, duration: 597, easing: "easeOutBack" },
                { id: "eid2000", tween: [ "style", "${_TextCopy3}", "left", '332px', { fromValue: '295px'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid2009", tween: [ "style", "${_Rectangle8}", "left", '297px', { fromValue: '266px'}], position: 3000, duration: 750, easing: "easeOutBack" },
                { id: "eid1983", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 1298, duration: 597, easing: "easeOutBack" },
                { id: "eid1993", tween: [ "style", "${_TextCopy2}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 500, easing: "easeOutBack" },
                { id: "eid1985", tween: [ "style", "${_TextCopy3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 597, easing: "easeOutBack" },
                { id: "eid1994", tween: [ "style", "${_TextCopy3}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid1988", tween: [ "style", "${_btn_iniciar2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1992", tween: [ "style", "${_btn_iniciar2}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid1990", tween: [ "transform", "${_btn_iniciar2}", "scaleY", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1987", tween: [ "transform", "${_btn_iniciar2}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1986", tween: [ "style", "${_Rectangle8}", "width", '460px', { fromValue: '0px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2010", tween: [ "style", "${_icons-a}", "left", '206px', { fromValue: '175px'}], position: 3250, duration: 750, easing: "easeOutBack" },
                { id: "eid2011", tween: [ "style", "${_Rectangle8}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 750, easing: "easeOutBack" },
                { id: "eid1981", tween: [ "transform", "${_icons-a}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid1982", tween: [ "style", "${_TextCopy2}", "left", '295px', { fromValue: '262px'}], position: 1298, duration: 597, easing: "easeOutBack" },
                { id: "eid1999", tween: [ "style", "${_TextCopy2}", "left", '332px', { fromValue: '295px'}], position: 3250, duration: 500, easing: "easeOutBack" },
                { id: "eid2012", tween: [ "style", "${_icons-a}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 750, easing: "easeOutBack" }            ]
        }
    }
},
"slide_50": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'btn_iniciar2',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['593', '357px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['266px', '174px', '414px', '73px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'Rectangle8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,66,104,1.00)']
                },
                {
                    rect: ['295px', '182px', '224px', '30px', 'auto', 'auto'],
                    id: 'TextCopy3',
                    text: 'Actividad Interactiva',
                    font: ['Arial, Helvetica, sans-serif', 22, 'rgba(255,255,255,1.00)', '100', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['295px', '206px', '431px', '30px', 'auto', 'auto'],
                    id: 'TextCopy2',
                    text: 'Agronomía, veterinaria y afines',
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '900', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['175px', '150px', '1044px', '120px', 'auto', 'auto'],
                    id: 'icons-a',
                    type: 'image',
                    clip: ['rect(0px 119px 120px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/icons-a.png', '-580.0009765625px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'btn_iniciar2',
                symbolName: 'btn_iniciar',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '182px'],
                ["style", "font-size", '22px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '262px'],
                ["style", "width", '224px']
            ],
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '206px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '262px'],
                ["style", "width", '431px']
            ],
            "${_icons-a}": [
                ["style", "top", '150px'],
                ["style", "-webkit-transform-origin", [5.75,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "clip", [0,119,120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "background-position", [-580.0009765625,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '175px']
            ],
            "${_btn_iniciar2}": [
                ["style", "top", '357px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '505px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle8}": [
                ["color", "background-color", 'rgba(0,66,104,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '0px'],
                ["style", "top", '174px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '73px'],
                ["style", "left", '266px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            timeline: [
                { id: "eid1989", tween: [ "style", "${_btn_iniciar2}", "left", '593px', { fromValue: '505px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1991", tween: [ "style", "${_btn_iniciar2}", "left", '477px', { fromValue: '593px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid1980", tween: [ "transform", "${_icons-a}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid1984", tween: [ "style", "${_TextCopy3}", "left", '295px', { fromValue: '262px'}], position: 1000, duration: 597, easing: "easeOutBack" },
                { id: "eid2000", tween: [ "style", "${_TextCopy3}", "left", '332px', { fromValue: '295px'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid2009", tween: [ "style", "${_Rectangle8}", "left", '297px', { fromValue: '266px'}], position: 3000, duration: 750, easing: "easeOutBack" },
                { id: "eid1983", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 1298, duration: 597, easing: "easeOutBack" },
                { id: "eid1993", tween: [ "style", "${_TextCopy2}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 500, easing: "easeOutBack" },
                { id: "eid1985", tween: [ "style", "${_TextCopy3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 597, easing: "easeOutBack" },
                { id: "eid1994", tween: [ "style", "${_TextCopy3}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid1988", tween: [ "style", "${_btn_iniciar2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1992", tween: [ "style", "${_btn_iniciar2}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid1990", tween: [ "transform", "${_btn_iniciar2}", "scaleY", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1987", tween: [ "transform", "${_btn_iniciar2}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1986", tween: [ "style", "${_Rectangle8}", "width", '460px', { fromValue: '0px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2010", tween: [ "style", "${_icons-a}", "left", '206px', { fromValue: '175px'}], position: 3250, duration: 750, easing: "easeOutBack" },
                { id: "eid2011", tween: [ "style", "${_Rectangle8}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 750, easing: "easeOutBack" },
                { id: "eid1981", tween: [ "transform", "${_icons-a}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid1982", tween: [ "style", "${_TextCopy2}", "left", '295px', { fromValue: '262px'}], position: 1298, duration: 597, easing: "easeOutBack" },
                { id: "eid1999", tween: [ "style", "${_TextCopy2}", "left", '332px', { fromValue: '295px'}], position: 3250, duration: 500, easing: "easeOutBack" },
                { id: "eid2012", tween: [ "style", "${_icons-a}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 750, easing: "easeOutBack" }            ]
        }
    }
},
"slide_51": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'btn_iniciar2',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['593', '357px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['266px', '174px', '414px', '73px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'Rectangle8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,66,104,1.00)']
                },
                {
                    rect: ['295px', '182px', '224px', '30px', 'auto', 'auto'],
                    id: 'TextCopy3',
                    text: 'Actividad Interactiva',
                    font: ['Arial, Helvetica, sans-serif', 22, 'rgba(255,255,255,1.00)', '100', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['295px', '206px', '431px', '30px', 'auto', 'auto'],
                    id: 'TextCopy2',
                    text: 'Agronomía, veterinaria y afines',
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '900', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['175px', '150px', '1044px', '120px', 'auto', 'auto'],
                    id: 'icons-a',
                    type: 'image',
                    clip: ['rect(0px 119px 120px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/icons-a.png', '-580.0009765625px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'btn_iniciar2',
                symbolName: 'btn_iniciar',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '182px'],
                ["style", "font-size", '22px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '262px'],
                ["style", "width", '224px']
            ],
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '206px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '262px'],
                ["style", "width", '431px']
            ],
            "${_icons-a}": [
                ["style", "top", '150px'],
                ["style", "-webkit-transform-origin", [5.75,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "clip", [0,119,120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "background-position", [-580.0009765625,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '175px']
            ],
            "${_btn_iniciar2}": [
                ["style", "top", '357px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '505px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle8}": [
                ["color", "background-color", 'rgba(0,66,104,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '0px'],
                ["style", "top", '174px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '73px'],
                ["style", "left", '266px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            timeline: [
                { id: "eid1989", tween: [ "style", "${_btn_iniciar2}", "left", '593px', { fromValue: '505px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1991", tween: [ "style", "${_btn_iniciar2}", "left", '477px', { fromValue: '593px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid1980", tween: [ "transform", "${_icons-a}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid1984", tween: [ "style", "${_TextCopy3}", "left", '295px', { fromValue: '262px'}], position: 1000, duration: 597, easing: "easeOutBack" },
                { id: "eid2000", tween: [ "style", "${_TextCopy3}", "left", '332px', { fromValue: '295px'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid2009", tween: [ "style", "${_Rectangle8}", "left", '297px', { fromValue: '266px'}], position: 3000, duration: 750, easing: "easeOutBack" },
                { id: "eid1983", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 1298, duration: 597, easing: "easeOutBack" },
                { id: "eid1993", tween: [ "style", "${_TextCopy2}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 500, easing: "easeOutBack" },
                { id: "eid1985", tween: [ "style", "${_TextCopy3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 597, easing: "easeOutBack" },
                { id: "eid1994", tween: [ "style", "${_TextCopy3}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid1988", tween: [ "style", "${_btn_iniciar2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1992", tween: [ "style", "${_btn_iniciar2}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid1990", tween: [ "transform", "${_btn_iniciar2}", "scaleY", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1987", tween: [ "transform", "${_btn_iniciar2}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1986", tween: [ "style", "${_Rectangle8}", "width", '460px', { fromValue: '0px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2010", tween: [ "style", "${_icons-a}", "left", '206px', { fromValue: '175px'}], position: 3250, duration: 750, easing: "easeOutBack" },
                { id: "eid2011", tween: [ "style", "${_Rectangle8}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 750, easing: "easeOutBack" },
                { id: "eid1981", tween: [ "transform", "${_icons-a}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid1982", tween: [ "style", "${_TextCopy2}", "left", '295px', { fromValue: '262px'}], position: 1298, duration: 597, easing: "easeOutBack" },
                { id: "eid1999", tween: [ "style", "${_TextCopy2}", "left", '332px', { fromValue: '295px'}], position: 3250, duration: 500, easing: "easeOutBack" },
                { id: "eid2012", tween: [ "style", "${_icons-a}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 750, easing: "easeOutBack" }            ]
        }
    }
},
"btn_homeArtes": {
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
                    rect: ['2px', '-6px', '56px', '495px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.92', '0.92']],
                    id: 'icons_home',
                    type: 'image',
                    clip: ['rect(4.34782600402832px 56px 56.73891830444336px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/icons_home.png', '-1.4298148777157px', '-162.50053074049px']
                },
                {
                    rect: ['36px', '-5px', '158px', '60px', 'auto', 'auto'],
                    id: 'label_home',
                    transform: [[], [], [], ['0.65', '0.65']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/label_home.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '170px', '50px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '170px'],
                ["style", "overflow", 'hidden']
            ],
            "${_label_home}": [
                ["style", "top", '29px'],
                ["transform", "scaleY", '0.65'],
                ["style", "overflow", 'hidden'],
                ["transform", "scaleX", '0.65'],
                ["style", "opacity", '0'],
                ["style", "left", '40px']
            ],
            "${_Rectangle11}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)']
            ],
            "${_icons_home}": [
                ["style", "top", '-6px'],
                ["transform", "scaleY", '0'],
                ["style", "clip", [4.34782600402832,56,56.73891830444336,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0'],
                ["style", "left", '2px'],
                ["style", "background-position", [-1.4298148777157,-162.50053074049], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "-webkit-transform-origin", [51.94,6.19], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: true,
            timeline: [
                { id: "eid2017", tween: [ "style", "${_label_home}", "top", '-5px', { fromValue: '29px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2019", tween: [ "style", "${_label_home}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2015", tween: [ "style", "${_label_home}", "left", '36px', { fromValue: '40px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2021", tween: [ "transform", "${_icons_home}", "scaleX", '0.92', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid2023", tween: [ "transform", "${_icons_home}", "scaleY", '0.92', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" }            ]
        }
    }
},
"btnac3": {
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
                    rect: ['-10px', '-23px', '139px', '311px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.85', '0.85']],
                    id: 'ac3',
                    type: 'image',
                    clip: ['rect(101.64694213867188px 139px 311px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/ac3.png', '0px', '0px']
                },
                {
                    rect: ['-10px', '-23px', '139px', '311px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.85', '0.85']],
                    id: 'ac3Copy',
                    type: 'image',
                    clip: ['rect(0px 139px 97.35282897949219px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/ac3.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '118px', '264px', 'auto', 'auto'],
                    id: 'hotspot',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ac3Copy}": [
                ["style", "top", '-23px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "left", '-10px'],
                ["style", "clip", [0,139,97.35282897949219,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '264px'],
                ["style", "width", '118px']
            ],
            "${_hotspot}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)']
            ],
            "${_ac3}": [
                ["style", "top", '-23px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "left", '-10px'],
                ["style", "clip", [101.64694213867188,139,311,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid2052", tween: [ "style", "${_ac3Copy}", "top", '18px', { fromValue: '-23px'}], position: 0, duration: 500, easing: "easeOutSine" },
                { id: "eid2053", tween: [ "style", "${_ac3Copy}", "top", '-23px', { fromValue: '18px'}], position: 500, duration: 500, easing: "easeOutSine" }            ]
        }
    }
},
"btn_homeEducacion": {
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
                    rect: ['2px', '-6px', '56px', '495px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.92', '0.92']],
                    id: 'icons_home',
                    type: 'image',
                    clip: ['rect(4.34782600402832px 56px 56.73891830444336px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/icons_home.png', '-1.0869565217391px', '-434.2391304348px']
                },
                {
                    rect: ['36px', '-5px', '158px', '60px', 'auto', 'auto'],
                    id: 'label_home',
                    transform: [[], [], [], ['0.65', '0.65']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/label_home.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '170px', '50px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '170px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle11}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)']
            ],
            "${_label_home}": [
                ["style", "top", '29px'],
                ["transform", "scaleY", '0.65'],
                ["style", "overflow", 'hidden'],
                ["transform", "scaleX", '0.65'],
                ["style", "opacity", '0'],
                ["style", "left", '40px']
            ],
            "${_icons_home}": [
                ["style", "top", '-6px'],
                ["transform", "scaleY", '0'],
                ["style", "clip", [4.34782600402832,56,56.73891830444336,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0'],
                ["style", "left", '2px'],
                ["style", "background-position", [-1.0869565217391,-434.2391304348], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "-webkit-transform-origin", [51.94,6.19], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [51.94,6.19],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: true,
            timeline: [
                { id: "eid2017", tween: [ "style", "${_label_home}", "top", '-5px', { fromValue: '29px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2019", tween: [ "style", "${_label_home}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2015", tween: [ "style", "${_label_home}", "left", '36px', { fromValue: '40px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2021", tween: [ "transform", "${_icons_home}", "scaleX", '0.92', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid2023", tween: [ "transform", "${_icons_home}", "scaleY", '0.92', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" }            ]
        }
    }
},
"slide_9": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'btn_iniciar2',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['593', '357px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['266px', '174px', '414px', '73px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'Rectangle8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,66,104,1.00)']
                },
                {
                    rect: ['295px', '182px', '224px', '30px', 'auto', 'auto'],
                    id: 'TextCopy3',
                    text: 'Actividad Interactiva',
                    font: ['Arial, Helvetica, sans-serif', 22, 'rgba(255,255,255,1.00)', '100', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['295px', '206px', '431px', '30px', 'auto', 'auto'],
                    id: 'TextCopy2',
                    text: 'Ciencias de la educación',
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '900', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['175px', '150px', '1044px', '120px', 'auto', 'auto'],
                    id: 'icons-a',
                    type: 'image',
                    clip: ['rect(0px 119px 120px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/icons-a.png', '-926.6025390625px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'btn_iniciar2',
                symbolName: 'btn_iniciar',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '182px'],
                ["style", "width", '224px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '262px'],
                ["style", "font-size", '22px']
            ],
            "${_btn_iniciar2}": [
                ["style", "top", '357px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '505px'],
                ["style", "cursor", 'pointer']
            ],
            "${_TextCopy2}": [
                ["style", "top", '206px'],
                ["style", "height", '30px'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '262px'],
                ["style", "width", '431px']
            ],
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px']
            ],
            "${_icons-a}": [
                ["style", "top", '150px'],
                ["style", "left", '175px'],
                ["transform", "scaleY", '0'],
                ["style", "background-position", [-926.6025390625,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "clip", [0,119,120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [5.75,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [5.75,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Rectangle8}": [
                ["color", "background-color", 'rgba(0,66,104,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '0px'],
                ["style", "top", '174px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '73px'],
                ["style", "left", '266px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            timeline: [
                { id: "eid1989", tween: [ "style", "${_btn_iniciar2}", "left", '593px', { fromValue: '505px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1991", tween: [ "style", "${_btn_iniciar2}", "left", '477px', { fromValue: '593px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid1980", tween: [ "transform", "${_icons-a}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid1984", tween: [ "style", "${_TextCopy3}", "left", '295px', { fromValue: '262px'}], position: 1000, duration: 597, easing: "easeOutBack" },
                { id: "eid2000", tween: [ "style", "${_TextCopy3}", "left", '332px', { fromValue: '295px'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid2009", tween: [ "style", "${_Rectangle8}", "left", '297px', { fromValue: '266px'}], position: 3000, duration: 750, easing: "easeOutBack" },
                { id: "eid2012", tween: [ "style", "${_icons-a}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 750, easing: "easeOutBack" },
                { id: "eid1985", tween: [ "style", "${_TextCopy3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 597, easing: "easeOutBack" },
                { id: "eid1994", tween: [ "style", "${_TextCopy3}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid1988", tween: [ "style", "${_btn_iniciar2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1992", tween: [ "style", "${_btn_iniciar2}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid1990", tween: [ "transform", "${_btn_iniciar2}", "scaleY", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1982", tween: [ "style", "${_TextCopy2}", "left", '295px', { fromValue: '262px'}], position: 1298, duration: 597, easing: "easeOutBack" },
                { id: "eid1999", tween: [ "style", "${_TextCopy2}", "left", '332px', { fromValue: '295px'}], position: 3250, duration: 500, easing: "easeOutBack" },
                { id: "eid1986", tween: [ "style", "${_Rectangle8}", "width", '460px', { fromValue: '0px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid2010", tween: [ "style", "${_icons-a}", "left", '206px', { fromValue: '175px'}], position: 3250, duration: 750, easing: "easeOutBack" },
                { id: "eid2011", tween: [ "style", "${_Rectangle8}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 750, easing: "easeOutBack" },
                { id: "eid1987", tween: [ "transform", "${_btn_iniciar2}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid1981", tween: [ "transform", "${_icons-a}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid1983", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 1298, duration: 597, easing: "easeOutBack" },
                { id: "eid1993", tween: [ "style", "${_TextCopy2}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 500, easing: "easeOutBack" }            ]
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
})(jQuery, AdobeEdge, "EDGE-5531445");
