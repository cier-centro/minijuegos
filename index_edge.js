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
                display: 'none',
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
                id: 'textCount',
                display: 'none',
                type: 'text',
                rect: ['449px', '544px','81px','33px','auto', 'auto'],
                text: "0/0",
                align: "center",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 24, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'slide_101',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_100',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_99',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_98',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_97',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_96',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_95',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_94',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_93',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_92',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_91',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_90',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_89',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_88',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_87',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_86',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_85',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_84',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_83',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_82',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_81',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_80',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_79',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_78',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_77',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_76',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_75',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_74',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_73',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_72',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_71',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_70',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_69',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_68',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_67',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_66',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_65',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_64',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_63',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_62',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_61',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_60',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_59',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_58',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_57',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_56',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_55',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_54',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_53',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_52',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_51',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_50',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_49',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_48',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_47',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_46',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_45',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_44',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_43',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_42',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'slide_41',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
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
                rect: ['0', '0','980px','580px','auto', 'auto']
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
                rect: ['0', '0','980px','580px','auto', 'auto']
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
                rect: ['0px', '0px','auto','auto','auto', 'auto'],
                overflow: 'visible'
            },
            {
                id: 'bt_next',
                display: 'none',
                type: 'rect',
                rect: ['920px', '469px','auto','auto','auto', 'auto']
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
                id: 'bt_ini',
                display: 'block',
                type: 'rect',
                rect: ['846px', '447px','auto','auto','auto', 'auto'],
                cursor: ['pointer'],
                transform: [[],[],[],['0.73605','0.73605']]
            }],
            symbolInstances: [
            {
                id: 'slide_86',
                symbolName: 'slide_86',
                autoPlay: {

                }
            },
            {
                id: 'slide_83',
                symbolName: 'slide_83',
                autoPlay: {

                }
            },
            {
                id: 'slide_79',
                symbolName: 'slide_79',
                autoPlay: {

                }
            },
            {
                id: 'slide_98',
                symbolName: 'slide_98',
                autoPlay: {

                }
            },
            {
                id: 'slide_47',
                symbolName: 'slide_47',
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
                id: 'slide_43',
                symbolName: 'slide_43',
                autoPlay: {

                }
            },
            {
                id: 'slide_56',
                symbolName: 'slide_56',
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
                id: 'slide_12',
                symbolName: 'slide_12',
                autoPlay: {

                }
            },
            {
                id: 'slide_52',
                symbolName: 'slide_52',
                autoPlay: {

                }
            },
            {
                id: 'slide_77',
                symbolName: 'slide_77',
                autoPlay: {

                }
            },
            {
                id: 'slide_54',
                symbolName: 'slide_54',
                autoPlay: {

                }
            },
            {
                id: 'slide_73',
                symbolName: 'slide_73',
                autoPlay: {

                }
            },
            {
                id: 'slide_64',
                symbolName: 'slide_64',
                autoPlay: {

                }
            },
            {
                id: 'slide_101',
                symbolName: 'slide_101',
                autoPlay: {

                }
            },
            {
                id: 'slide_89',
                symbolName: 'slide_89',
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
                id: 'slide_66',
                symbolName: 'slide_66',
                autoPlay: {

                }
            },
            {
                id: 'slide_41',
                symbolName: 'slide_41',
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
                id: 'slide_25',
                symbolName: 'slide_25',
                autoPlay: {

                }
            },
            {
                id: 'slide_90',
                symbolName: 'slide_90',
                autoPlay: {

                }
            },
            {
                id: 'slide_42',
                symbolName: 'slide_42',
                autoPlay: {

                }
            },
            {
                id: 'slide_49',
                symbolName: 'slide_49',
                autoPlay: {

                }
            },
            {
                id: 'slide_59',
                symbolName: 'slide_59',
                autoPlay: {

                }
            },
            {
                id: 'slide_95',
                symbolName: 'slide_95',
                autoPlay: {

                }
            },
            {
                id: 'bt_ini',
                symbolName: 'bt_ini',
                autoPlay: {

                }
            },
            {
                id: 'slide_9',
                symbolName: 'slide_9',
                autoPlay: {

                }
            },
            {
                id: 'slide_96',
                symbolName: 'slide_96',
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
                id: 'slide_78',
                symbolName: 'slide_78',
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
                id: 'slide_63',
                symbolName: 'slide_63',
                autoPlay: {

                }
            },
            {
                id: 'slide_70',
                symbolName: 'slide_70',
                autoPlay: {

                }
            },
            {
                id: 'slide_1',
                symbolName: 'slide_1'
            },
            {
                id: 'slide_2',
                symbolName: 'slide_2',
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
                id: 'slide_48',
                symbolName: 'slide_48',
                autoPlay: {

                }
            },
            {
                id: 'slide_13',
                symbolName: 'slide_13',
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
                id: 'slide_87',
                symbolName: 'slide_87',
                autoPlay: {

                }
            },
            {
                id: 'slide_6',
                symbolName: 'slide_6',
                autoPlay: {

                }
            },
            {
                id: 'slide_76',
                symbolName: 'slide_76',
                autoPlay: {

                }
            },
            {
                id: 'slide_38',
                symbolName: 'slide_38',
                autoPlay: {

                }
            },
            {
                id: 'slide_81',
                symbolName: 'slide_81',
                autoPlay: {

                }
            },
            {
                id: 'slide_60',
                symbolName: 'slide_60',
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
                id: 'slide_11',
                symbolName: 'slide_11',
                autoPlay: {

                }
            },
            {
                id: 'slide_92',
                symbolName: 'slide_92',
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
                id: 'slide_15',
                symbolName: 'slide_15',
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
                id: 'slide_19',
                symbolName: 'slide_19',
                autoPlay: {

                }
            },
            {
                id: 'slide_17',
                symbolName: 'slide_17',
                autoPlay: {

                }
            },
            {
                id: 'slide_18',
                symbolName: 'slide_18',
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
                id: 'slide_21',
                symbolName: 'slide_21',
                autoPlay: {

                }
            },
            {
                id: 'slide_69',
                symbolName: 'slide_69',
                autoPlay: {

                }
            },
            {
                id: 'slide_23',
                symbolName: 'slide_23',
                autoPlay: {

                }
            },
            {
                id: 'slide_45',
                symbolName: 'slide_45',
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
                id: 'slide_27',
                symbolName: 'slide_27',
                autoPlay: {

                }
            },
            {
                id: 'slide_71',
                symbolName: 'slide_71',
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
                id: 'slide_97',
                symbolName: 'slide_97',
                autoPlay: {

                }
            },
            {
                id: 'slide_53',
                symbolName: 'slide_53',
                autoPlay: {

                }
            },
            {
                id: 'slide_31',
                symbolName: 'slide_31',
                autoPlay: {

                }
            },
            {
                id: 'slide_88',
                symbolName: 'slide_88',
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
                id: 'slide_34',
                symbolName: 'slide_34',
                autoPlay: {

                }
            },
            {
                id: 'slide_58',
                symbolName: 'slide_58',
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
                id: 'slide_36',
                symbolName: 'slide_36',
                autoPlay: {

                }
            },
            {
                id: 'slide_67',
                symbolName: 'slide_67',
                autoPlay: {

                }
            },
            {
                id: 'slide_94',
                symbolName: 'slide_94',
                autoPlay: {

                }
            },
            {
                id: 'slide_84',
                symbolName: 'slide_84',
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
                id: 'slide_5',
                symbolName: 'slide_5',
                autoPlay: {

                }
            },
            {
                id: 'slide_100',
                symbolName: 'slide_100',
                autoPlay: {

                }
            },
            {
                id: 'slide_75',
                symbolName: 'slide_75',
                autoPlay: {

                }
            },
            {
                id: 'slide_72',
                symbolName: 'slide_72',
                autoPlay: {

                }
            },
            {
                id: 'slide_74',
                symbolName: 'slide_74',
                autoPlay: {

                }
            },
            {
                id: 'slide_99',
                symbolName: 'slide_99',
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
                id: 'slide_68',
                symbolName: 'slide_68',
                autoPlay: {

                }
            },
            {
                id: 'slide_51',
                symbolName: 'slide_51',
                autoPlay: {

                }
            },
            {
                id: 'slide_44',
                symbolName: 'slide_44',
                autoPlay: {

                }
            },
            {
                id: 'slide_61',
                symbolName: 'slide_61',
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
                id: 'slide_46',
                symbolName: 'slide_46',
                autoPlay: {

                }
            },
            {
                id: 'slide_82',
                symbolName: 'slide_82',
                autoPlay: {

                }
            },
            {
                id: 'slide_85',
                symbolName: 'slide_85',
                autoPlay: {

                }
            },
            {
                id: 'slide_57',
                symbolName: 'slide_57',
                autoPlay: {

                }
            },
            {
                id: 'slide_50',
                symbolName: 'slide_50',
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
                id: 'bt_next',
                symbolName: 'bt_next',
                autoPlay: {

                }
            },
            {
                id: 'slide_65',
                symbolName: 'slide_65',
                autoPlay: {

                }
            },
            {
                id: 'slide_80',
                symbolName: 'slide_80',
                autoPlay: {

                }
            },
            {
                id: 'slide_62',
                symbolName: 'slide_62',
                autoPlay: {

                }
            },
            {
                id: 'slide_55',
                symbolName: 'slide_55',
                autoPlay: {

                }
            },
            {
                id: 'slide_93',
                symbolName: 'slide_93',
                autoPlay: {

                }
            },
            {
                id: 'slide_91',
                symbolName: 'slide_91',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_slide_54}": [
                ["style", "display", 'none']
            ],
            "${_slide_1}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible']
            ],
            "${_slide_57}": [
                ["style", "display", 'none']
            ],
            "${_slide_60}": [
                ["style", "display", 'none']
            ],
            "${_slide_90}": [
                ["style", "display", 'none']
            ],
            "${_slide_70}": [
                ["style", "display", 'none']
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
            "${_slide_97}": [
                ["style", "display", 'none']
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
            "${_slide_31}": [
                ["style", "height", '580px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_83}": [
                ["style", "display", 'none']
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
            "${_slide_81}": [
                ["style", "display", 'none']
            ],
            "${_slide_48}": [
                ["style", "display", 'none']
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
            "${_slide_33}": [
                ["style", "height", '580px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_34}": [
                ["style", "height", '580px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_67}": [
                ["style", "display", 'none']
            ],
            "${_slide_37}": [
                ["style", "height", '580px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_instruccion}": [
                ["style", "top", '205px'],
                ["style", "width", '1146px'],
                ["color", "color", 'rgba(44,53,104,1)'],
                ["style", "font-weight", '400'],
                ["style", "display", 'block'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["style", "left", '104px'],
                ["style", "font-size", '21px']
            ],
            "${_slide_94}": [
                ["style", "display", 'none']
            ],
            "${_slide_8}": [
                ["style", "height", '580px'],
                ["style", "display", 'none'],
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
            "${_slide_78}": [
                ["style", "display", 'none']
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
            "${_slide_56}": [
                ["style", "display", 'none']
            ],
            "${_slide_99}": [
                ["style", "display", 'none']
            ],
            "${_slide_86}": [
                ["style", "display", 'none']
            ],
            "${_bt_next}": [
                ["style", "top", '469px'],
                ["transform", "scaleY", '1'],
                ["style", "overflow", 'hidden'],
                ["style", "display", 'none'],
                ["style", "left", '920px'],
                ["transform", "scaleX", '1']
            ],
            "${_slide_43}": [
                ["style", "display", 'none']
            ],
            "${_slide_84}": [
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '980px']
            ],
            "${_slide_49}": [
                ["style", "display", 'none']
            ],
            "${_slide_80}": [
                ["style", "display", 'none']
            ],
            "${_slide_45}": [
                ["style", "display", 'none']
            ],
            "${_slide_76}": [
                ["style", "display", 'none']
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
            "${_slide_36}": [
                ["style", "height", '580px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_96}": [
                ["style", "display", 'none']
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
            "${_slide_3}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_85}": [
                ["style", "display", 'none']
            ],
            "${_slide_98}": [
                ["style", "display", 'none']
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
            "${_slide_4}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
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
            "${_slide_64}": [
                ["style", "display", 'none']
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
                ["style", "height", '580px'],
                ["style", "display", 'none'],
                ["style", "width", '980px']
            ],
            "${_slide_93}": [
                ["style", "display", 'none']
            ],
            "${_slide_89}": [
                ["style", "display", 'none']
            ],
            "${_slide_75}": [
                ["style", "display", 'none']
            ],
            "${_slide_6}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_66}": [
                ["style", "display", 'none']
            ],
            "${_slide_39}": [
                ["style", "height", '580px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
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
            "${_slide_32}": [
                ["style", "height", '580px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_41}": [
                ["style", "display", 'none']
            ],
            "${_slide_74}": [
                ["style", "display", 'none']
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
            "${_slide_82}": [
                ["style", "display", 'none']
            ],
            "${_slide_51}": [
                ["style", "display", 'none']
            ],
            "${_slide_88}": [
                ["style", "display", 'none']
            ],
            "${_slide_73}": [
                ["style", "display", 'none']
            ],
            "${_slide_59}": [
                ["style", "display", 'none']
            ],
            "${_slide_65}": [
                ["style", "display", 'none']
            ],
            "${_slide_100}": [
                ["style", "display", 'none']
            ],
            "${_slide_95}": [
                ["style", "display", 'none']
            ],
            "${_slide_61}": [
                ["style", "display", 'none']
            ],
            "${_slide_69}": [
                ["style", "display", 'none']
            ],
            "${_slide_42}": [
                ["style", "display", 'none']
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
            "${_textCount}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '449px'],
                ["style", "font-size", '17px'],
                ["style", "top", '544px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'none'],
                ["style", "height", '33px'],
                ["style", "width", '81px'],
                ["style", "font-style", 'normal']
            ],
            "${_slide_62}": [
                ["style", "display", 'none']
            ],
            "${_slide_58}": [
                ["style", "display", 'none']
            ],
            "${_slide_47}": [
                ["style", "display", 'none']
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
            "${_slide_79}": [
                ["style", "display", 'none']
            ],
            "${_slide_55}": [
                ["style", "display", 'none']
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
            "${_slide_72}": [
                ["style", "display", 'none']
            ],
            "${_slide_9}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_101}": [
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
            "${_slide_87}": [
                ["style", "display", 'none']
            ],
            "${_slide_91}": [
                ["style", "display", 'none']
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
            "${_slide_71}": [
                ["style", "display", 'none']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(97,171,235,1.00)']
            ],
            "${_slide_44}": [
                ["style", "display", 'none']
            ],
            "${_slide_38}": [
                ["style", "height", '580px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_50}": [
                ["style", "display", 'none']
            ],
            "${_bt_back}": [
                ["style", "top", '469px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
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
            "${_bt_ini}": [
                ["style", "top", '447px'],
                ["transform", "scaleY", '0.73605'],
                ["transform", "scaleX", '0.73605'],
                ["style", "display", 'block'],
                ["style", "left", '846px'],
                ["style", "cursor", 'pointer']
            ],
            "${_slide_77}": [
                ["style", "display", 'none']
            ],
            "${_count}": [
                ["color", "background-color", 'rgba(44,62,80,1.00)'],
                ["style", "display", 'none'],
                ["style", "top", '530px'],
                ["style", "left", '458px'],
                ["style", "width", '63px']
            ],
            "${_slide_92}": [
                ["style", "display", 'none']
            ],
            "${_slide_40}": [
                ["style", "height", '580px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '980px']
            ],
            "${_slide_46}": [
                ["style", "display", 'none']
            ],
            "${_slide_68}": [
                ["style", "display", 'none']
            ],
            "${_slide_52}": [
                ["style", "display", 'none']
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
            "${_slide_63}": [
                ["style", "display", 'none']
            ],
            "${_slide_35}": [
                ["style", "height", '580px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
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
            "${_slide_53}": [
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 101000,
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
                "slide_40": 39000,
                "slide_41": 40000,
                "slide_42": 41000,
                "slide_43": 42000,
                "slide_44": 43000,
                "slide_45": 44000,
                "slide_46": 45000,
                "slide_47": 46000,
                "slide_48": 47000,
                "slide_49": 48000,
                "slide_50": 49000,
                "slide_51": 50000,
                "slide_52": 51000,
                "slide_53": 52000,
                "slide_54": 53000,
                "slide_55": 54000,
                "slide_56": 55000,
                "slide_57": 56000,
                "slide_58": 57000,
                "slide_59": 58000,
                "slide_60": 59000,
                "slide_61": 60000,
                "slide_62": 61000,
                "slide_63": 62000,
                "slide_64": 63000,
                "slide_65": 64000,
                "slide_66": 65000,
                "slide_67": 66000,
                "slide_68": 67000,
                "slide_69": 68000,
                "slide_70": 69000,
                "slide_71": 70000,
                "slide_72": 71000,
                "slide_73": 72000,
                "slide_74": 73000,
                "slide_75": 74000,
                "slide_76": 75000,
                "slide_77": 76000,
                "slide_78": 77000,
                "slide_79": 78000,
                "slide_80": 79000,
                "slide_81": 80000,
                "slide_82": 81000,
                "slide_83": 82000,
                "slide_84": 83000,
                "slide_85": 84000,
                "slide_86": 85000,
                "slide_87": 86000,
                "slide_88": 87000,
                "slide_89": 88000,
                "slide_90": 89000,
                "slide_91": 90000,
                "slide_92": 91000,
                "slide_93": 92000,
                "slide_94": 93000,
                "slide_95": 94000,
                "slide_96": 95000,
                "slide_97": 96000,
                "slide_98": 97000,
                "slide_99": 98000,
                "slide_100": 99000,
                "slide_101": 100000
            },
            timeline: [
                { id: "eid1771", tween: [ "style", "${_count}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1552", tween: [ "style", "${_slide_68}", "display", 'block', { fromValue: 'none'}], position: 67000, duration: 0 },
                { id: "eid1553", tween: [ "style", "${_slide_68}", "display", 'none', { fromValue: 'block'}], position: 68000, duration: 0 },
                { id: "eid1562", tween: [ "style", "${_slide_73}", "display", 'block', { fromValue: 'none'}], position: 72000, duration: 0 },
                { id: "eid1563", tween: [ "style", "${_slide_73}", "display", 'none', { fromValue: 'block'}], position: 73000, duration: 0 },
                { id: "eid1110", tween: [ "style", "${_slide_11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1240", tween: [ "style", "${_slide_11}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid1241", tween: [ "style", "${_slide_11}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid1572", tween: [ "style", "${_slide_78}", "display", 'block', { fromValue: 'none'}], position: 77000, duration: 0 },
                { id: "eid1573", tween: [ "style", "${_slide_78}", "display", 'none', { fromValue: 'block'}], position: 78000, duration: 0 },
                { id: "eid1114", tween: [ "style", "${_slide_15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1248", tween: [ "style", "${_slide_15}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid1249", tween: [ "style", "${_slide_15}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid1604", tween: [ "style", "${_slide_92}", "display", 'block', { fromValue: 'none'}], position: 91000, duration: 0 },
                { id: "eid1605", tween: [ "style", "${_slide_92}", "display", 'none', { fromValue: 'block'}], position: 92000, duration: 0 },
                { id: "eid1512", tween: [ "style", "${_slide_48}", "display", 'block', { fromValue: 'none'}], position: 47000, duration: 0 },
                { id: "eid1513", tween: [ "style", "${_slide_48}", "display", 'none', { fromValue: 'block'}], position: 48000, duration: 0 },
                { id: "eid1602", tween: [ "style", "${_slide_91}", "display", 'block', { fromValue: 'none'}], position: 90000, duration: 0 },
                { id: "eid1603", tween: [ "style", "${_slide_91}", "display", 'none', { fromValue: 'block'}], position: 91000, duration: 0 },
                { id: "eid1041", tween: [ "style", "${_slide_23}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1280", tween: [ "style", "${_slide_23}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid1281", tween: [ "style", "${_slide_23}", "display", 'none', { fromValue: 'block'}], position: 23000, duration: 0 },
                { id: "eid1625", tween: [ "style", "${_bt_next}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1115", tween: [ "style", "${_slide_16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1250", tween: [ "style", "${_slide_16}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid1251", tween: [ "style", "${_slide_16}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0 },
                { id: "eid1564", tween: [ "style", "${_slide_74}", "display", 'block', { fromValue: 'none'}], position: 73000, duration: 0 },
                { id: "eid1565", tween: [ "style", "${_slide_74}", "display", 'none', { fromValue: 'block'}], position: 74000, duration: 0 },
                { id: "eid1620", tween: [ "style", "${_slide_100}", "display", 'block', { fromValue: 'none'}], position: 99000, duration: 0 },
                { id: "eid1621", tween: [ "style", "${_slide_100}", "display", 'none', { fromValue: 'block'}], position: 100000, duration: 0 },
                { id: "eid1594", tween: [ "style", "${_slide_87}", "display", 'block', { fromValue: 'none'}], position: 86000, duration: 0 },
                { id: "eid1595", tween: [ "style", "${_slide_87}", "display", 'none', { fromValue: 'block'}], position: 87000, duration: 0 },
                { id: "eid1325", tween: [ "style", "${_slide_34}", "display", 'block', { fromValue: 'none'}], position: 33000, duration: 0 },
                { id: "eid1327", tween: [ "style", "${_slide_34}", "display", 'none', { fromValue: 'block'}], position: 34000, duration: 0 },
                { id: "eid1570", tween: [ "style", "${_slide_77}", "display", 'block', { fromValue: 'none'}], position: 76000, duration: 0 },
                { id: "eid1571", tween: [ "style", "${_slide_77}", "display", 'none', { fromValue: 'block'}], position: 77000, duration: 0 },
                { id: "eid1528", tween: [ "style", "${_slide_56}", "display", 'block', { fromValue: 'none'}], position: 55000, duration: 0 },
                { id: "eid1529", tween: [ "style", "${_slide_56}", "display", 'none', { fromValue: 'block'}], position: 56000, duration: 0 },
                { id: "eid1117", tween: [ "style", "${_slide_18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1270", tween: [ "style", "${_slide_18}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid1271", tween: [ "style", "${_slide_18}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid1508", tween: [ "style", "${_slide_46}", "display", 'block', { fromValue: 'none'}], position: 45000, duration: 0 },
                { id: "eid1509", tween: [ "style", "${_slide_46}", "display", 'none', { fromValue: 'block'}], position: 46000, duration: 0 },
                { id: "eid1108", tween: [ "style", "${_slide_9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1236", tween: [ "style", "${_slide_9}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid1237", tween: [ "style", "${_slide_9}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid1118", tween: [ "style", "${_slide_19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1272", tween: [ "style", "${_slide_19}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid1273", tween: [ "style", "${_slide_19}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
                { id: "eid1504", tween: [ "style", "${_slide_44}", "display", 'block', { fromValue: 'none'}], position: 43000, duration: 0 },
                { id: "eid1505", tween: [ "style", "${_slide_44}", "display", 'none', { fromValue: 'block'}], position: 44000, duration: 0 },
                { id: "eid1566", tween: [ "style", "${_slide_75}", "display", 'block', { fromValue: 'none'}], position: 74000, duration: 0 },
                { id: "eid1567", tween: [ "style", "${_slide_75}", "display", 'none', { fromValue: 'block'}], position: 75000, duration: 0 },
                { id: "eid1124", tween: [ "style", "${_slide_25}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1284", tween: [ "style", "${_slide_25}", "display", 'block', { fromValue: 'none'}], position: 24000, duration: 0 },
                { id: "eid1285", tween: [ "style", "${_slide_25}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0 },
                { id: "eid1858", tween: [ "style", "${_slide_1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutBack" },
                { id: "eid1109", tween: [ "style", "${_slide_10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1238", tween: [ "style", "${_slide_10}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid1239", tween: [ "style", "${_slide_10}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid1560", tween: [ "style", "${_slide_72}", "display", 'block', { fromValue: 'none'}], position: 71000, duration: 0 },
                { id: "eid1561", tween: [ "style", "${_slide_72}", "display", 'none', { fromValue: 'block'}], position: 72000, duration: 0 },
                { id: "eid1622", tween: [ "style", "${_slide_101}", "display", 'block', { fromValue: 'none'}], position: 100000, duration: 0 },
                { id: "eid1623", tween: [ "style", "${_slide_101}", "display", 'none', { fromValue: 'block'}], position: 101000, duration: 0 },
                { id: "eid1120", tween: [ "style", "${_slide_21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1276", tween: [ "style", "${_slide_21}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid1277", tween: [ "style", "${_slide_21}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
                { id: "eid1113", tween: [ "style", "${_slide_14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1246", tween: [ "style", "${_slide_14}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid1247", tween: [ "style", "${_slide_14}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid1538", tween: [ "style", "${_slide_61}", "display", 'block', { fromValue: 'none'}], position: 60000, duration: 0 },
                { id: "eid1539", tween: [ "style", "${_slide_61}", "display", 'none', { fromValue: 'block'}], position: 61000, duration: 0 },
                { id: "eid1502", tween: [ "style", "${_slide_43}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0 },
                { id: "eid1503", tween: [ "style", "${_slide_43}", "display", 'none', { fromValue: 'block'}], position: 43000, duration: 0 },
                { id: "eid1598", tween: [ "style", "${_slide_89}", "display", 'block', { fromValue: 'none'}], position: 88000, duration: 0 },
                { id: "eid1599", tween: [ "style", "${_slide_89}", "display", 'none', { fromValue: 'block'}], position: 89000, duration: 0 },
                { id: "eid1126", tween: [ "style", "${_slide_27}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1288", tween: [ "style", "${_slide_27}", "display", 'block', { fromValue: 'none'}], position: 26000, duration: 0 },
                { id: "eid1289", tween: [ "style", "${_slide_27}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0 },
                { id: "eid1516", tween: [ "style", "${_slide_50}", "display", 'block', { fromValue: 'none'}], position: 49000, duration: 0 },
                { id: "eid1517", tween: [ "style", "${_slide_50}", "display", 'none', { fromValue: 'block'}], position: 50000, duration: 0 },
                { id: "eid1614", tween: [ "style", "${_slide_97}", "display", 'block', { fromValue: 'none'}], position: 96000, duration: 0 },
                { id: "eid1615", tween: [ "style", "${_slide_97}", "display", 'none', { fromValue: 'block'}], position: 97000, duration: 0 },
                { id: "eid1550", tween: [ "style", "${_slide_67}", "display", 'block', { fromValue: 'none'}], position: 66000, duration: 0 },
                { id: "eid1551", tween: [ "style", "${_slide_67}", "display", 'none', { fromValue: 'block'}], position: 67000, duration: 0 },
                { id: "eid1132", tween: [ "style", "${_slide_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1101", tween: [ "style", "${_slide_2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1131", tween: [ "style", "${_slide_2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid1035", tween: [ "style", "${_slide_17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1252", tween: [ "style", "${_slide_17}", "display", 'block', { fromValue: 'none'}], position: 16000, duration: 0 },
                { id: "eid1253", tween: [ "style", "${_slide_17}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 },
                { id: "eid1580", tween: [ "style", "${_slide_80}", "display", 'block', { fromValue: 'none'}], position: 79000, duration: 0 },
                { id: "eid1581", tween: [ "style", "${_slide_80}", "display", 'none', { fromValue: 'block'}], position: 80000, duration: 0 },
                { id: "eid1129", tween: [ "style", "${_slide_30}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1294", tween: [ "style", "${_slide_30}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0 },
                { id: "eid1295", tween: [ "style", "${_slide_30}", "display", 'none', { fromValue: 'block'}], position: 30000, duration: 0 },
                { id: "eid1584", tween: [ "style", "${_slide_82}", "display", 'block', { fromValue: 'none'}], position: 81000, duration: 0 },
                { id: "eid1585", tween: [ "style", "${_slide_82}", "display", 'none', { fromValue: 'block'}], position: 82000, duration: 0 },
                { id: "eid1588", tween: [ "style", "${_slide_84}", "display", 'block', { fromValue: 'none'}], position: 83000, duration: 0 },
                { id: "eid1589", tween: [ "style", "${_slide_84}", "display", 'none', { fromValue: 'block'}], position: 84000, duration: 0 },
                { id: "eid1600", tween: [ "style", "${_slide_90}", "display", 'block', { fromValue: 'none'}], position: 89000, duration: 0 },
                { id: "eid1601", tween: [ "style", "${_slide_90}", "display", 'none', { fromValue: 'block'}], position: 90000, duration: 0 },
                { id: "eid1558", tween: [ "style", "${_slide_71}", "display", 'block', { fromValue: 'none'}], position: 70000, duration: 0 },
                { id: "eid1559", tween: [ "style", "${_slide_71}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid1316", tween: [ "style", "${_slide_31}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid1317", tween: [ "style", "${_slide_31}", "display", 'none', { fromValue: 'block'}], position: 31000, duration: 0 },
                { id: "eid1596", tween: [ "style", "${_slide_88}", "display", 'block', { fromValue: 'none'}], position: 87000, duration: 0 },
                { id: "eid1597", tween: [ "style", "${_slide_88}", "display", 'none', { fromValue: 'block'}], position: 88000, duration: 0 },
                { id: "eid1526", tween: [ "style", "${_slide_55}", "display", 'block', { fromValue: 'none'}], position: 54000, duration: 0 },
                { id: "eid1527", tween: [ "style", "${_slide_55}", "display", 'none', { fromValue: 'block'}], position: 55000, duration: 0 },
                { id: "eid1318", tween: [ "style", "${_slide_32}", "display", 'block', { fromValue: 'none'}], position: 31000, duration: 0 },
                { id: "eid1319", tween: [ "style", "${_slide_32}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0 },
                { id: "eid1330", tween: [ "style", "${_slide_36}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
                { id: "eid1331", tween: [ "style", "${_slide_36}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0 },
                { id: "eid1520", tween: [ "style", "${_slide_52}", "display", 'block', { fromValue: 'none'}], position: 51000, duration: 0 },
                { id: "eid1521", tween: [ "style", "${_slide_52}", "display", 'none', { fromValue: 'block'}], position: 52000, duration: 0 },
                { id: "eid1532", tween: [ "style", "${_slide_58}", "display", 'block', { fromValue: 'none'}], position: 57000, duration: 0 },
                { id: "eid1533", tween: [ "style", "${_slide_58}", "display", 'none', { fromValue: 'block'}], position: 58000, duration: 0 },
                { id: "eid1524", tween: [ "style", "${_slide_54}", "display", 'block', { fromValue: 'none'}], position: 53000, duration: 0 },
                { id: "eid1525", tween: [ "style", "${_slide_54}", "display", 'none', { fromValue: 'block'}], position: 54000, duration: 0 },
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
                { id: "eid1540", tween: [ "style", "${_slide_62}", "display", 'block', { fromValue: 'none'}], position: 61000, duration: 0 },
                { id: "eid1541", tween: [ "style", "${_slide_62}", "display", 'none', { fromValue: 'block'}], position: 62000, duration: 0 },
                { id: "eid1047", tween: [ "style", "${_slide_29}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1292", tween: [ "style", "${_slide_29}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid1293", tween: [ "style", "${_slide_29}", "display", 'none', { fromValue: 'block'}], position: 29000, duration: 0 },
                { id: "eid1510", tween: [ "style", "${_slide_47}", "display", 'block', { fromValue: 'none'}], position: 46000, duration: 0 },
                { id: "eid1511", tween: [ "style", "${_slide_47}", "display", 'none', { fromValue: 'block'}], position: 47000, duration: 0 },
                { id: "eid1332", tween: [ "style", "${_slide_37}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid1333", tween: [ "style", "${_slide_37}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0 },
                { id: "eid1133", tween: [ "style", "${_slide_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1102", tween: [ "style", "${_slide_3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1135", tween: [ "style", "${_slide_3}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid1309", tween: [ "style", "${_textCount}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1734", tween: [ "style", "${_textCount}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1123", tween: [ "style", "${_slide_24}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1282", tween: [ "style", "${_slide_24}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid1283", tween: [ "style", "${_slide_24}", "display", 'none', { fromValue: 'block'}], position: 24000, duration: 0 },
                { id: "eid1514", tween: [ "style", "${_slide_49}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0 },
                { id: "eid1515", tween: [ "style", "${_slide_49}", "display", 'none', { fromValue: 'block'}], position: 49000, duration: 0 },
                { id: "eid1610", tween: [ "style", "${_slide_95}", "display", 'block', { fromValue: 'none'}], position: 94000, duration: 0 },
                { id: "eid1611", tween: [ "style", "${_slide_95}", "display", 'none', { fromValue: 'block'}], position: 95000, duration: 0 },
                { id: "eid1534", tween: [ "style", "${_slide_59}", "display", 'block', { fromValue: 'none'}], position: 58000, duration: 0 },
                { id: "eid1535", tween: [ "style", "${_slide_59}", "display", 'none', { fromValue: 'block'}], position: 59000, duration: 0 },
                { id: "eid1530", tween: [ "style", "${_slide_57}", "display", 'block', { fromValue: 'none'}], position: 56000, duration: 0 },
                { id: "eid1531", tween: [ "style", "${_slide_57}", "display", 'none', { fromValue: 'block'}], position: 57000, duration: 0 },
                { id: "eid1046", tween: [ "style", "${_slide_28}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1290", tween: [ "style", "${_slide_28}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid1291", tween: [ "style", "${_slide_28}", "display", 'none', { fromValue: 'block'}], position: 28000, duration: 0 },
                { id: "eid1556", tween: [ "style", "${_slide_70}", "display", 'block', { fromValue: 'none'}], position: 69000, duration: 0 },
                { id: "eid1557", tween: [ "style", "${_slide_70}", "display", 'none', { fromValue: 'block'}], position: 70000, duration: 0 },
                { id: "eid1111", tween: [ "style", "${_slide_12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1242", tween: [ "style", "${_slide_12}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid1243", tween: [ "style", "${_slide_12}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid1606", tween: [ "style", "${_slide_93}", "display", 'block', { fromValue: 'none'}], position: 92000, duration: 0 },
                { id: "eid1607", tween: [ "style", "${_slide_93}", "display", 'none', { fromValue: 'block'}], position: 93000, duration: 0 },
                { id: "eid1586", tween: [ "style", "${_slide_83}", "display", 'block', { fromValue: 'none'}], position: 82000, duration: 0 },
                { id: "eid1587", tween: [ "style", "${_slide_83}", "display", 'none', { fromValue: 'block'}], position: 83000, duration: 0 },
                { id: "eid1592", tween: [ "style", "${_slide_86}", "display", 'block', { fromValue: 'none'}], position: 85000, duration: 0 },
                { id: "eid1593", tween: [ "style", "${_slide_86}", "display", 'none', { fromValue: 'block'}], position: 86000, duration: 0 },
                { id: "eid1544", tween: [ "style", "${_slide_64}", "display", 'block', { fromValue: 'none'}], position: 63000, duration: 0 },
                { id: "eid1545", tween: [ "style", "${_slide_64}", "display", 'none', { fromValue: 'block'}], position: 64000, duration: 0 },
                { id: "eid1031", tween: [ "style", "${_slide_13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1244", tween: [ "style", "${_slide_13}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid1245", tween: [ "style", "${_slide_13}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid1624", tween: [ "style", "${_bt_back}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1618", tween: [ "style", "${_slide_99}", "display", 'block', { fromValue: 'none'}], position: 98000, duration: 0 },
                { id: "eid1619", tween: [ "style", "${_slide_99}", "display", 'none', { fromValue: 'block'}], position: 99000, duration: 0 },
                { id: "eid1044", tween: [ "style", "${_slide_26}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1286", tween: [ "style", "${_slide_26}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid1287", tween: [ "style", "${_slide_26}", "display", 'none', { fromValue: 'block'}], position: 26000, duration: 0 },
                { id: "eid1040", tween: [ "style", "${_slide_22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1278", tween: [ "style", "${_slide_22}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid1279", tween: [ "style", "${_slide_22}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0 },
                { id: "eid1038", tween: [ "style", "${_slide_20}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1274", tween: [ "style", "${_slide_20}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid1275", tween: [ "style", "${_slide_20}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid1536", tween: [ "style", "${_slide_60}", "display", 'block', { fromValue: 'none'}], position: 59000, duration: 0 },
                { id: "eid1537", tween: [ "style", "${_slide_60}", "display", 'none', { fromValue: 'block'}], position: 60000, duration: 0 },
                { id: "eid1496", tween: [ "style", "${_slide_41}", "display", 'block', { fromValue: 'none'}], position: 40000, duration: 0 },
                { id: "eid1497", tween: [ "style", "${_slide_41}", "display", 'none', { fromValue: 'block'}], position: 41000, duration: 0 },
                { id: "eid1548", tween: [ "style", "${_slide_66}", "display", 'block', { fromValue: 'none'}], position: 65000, duration: 0 },
                { id: "eid1549", tween: [ "style", "${_slide_66}", "display", 'none', { fromValue: 'block'}], position: 66000, duration: 0 },
                { id: "eid1522", tween: [ "style", "${_slide_53}", "display", 'block', { fromValue: 'none'}], position: 52000, duration: 0 },
                { id: "eid1523", tween: [ "style", "${_slide_53}", "display", 'none', { fromValue: 'block'}], position: 53000, duration: 0 },
                { id: "eid1546", tween: [ "style", "${_slide_65}", "display", 'block', { fromValue: 'none'}], position: 64000, duration: 0 },
                { id: "eid1547", tween: [ "style", "${_slide_65}", "display", 'none', { fromValue: 'block'}], position: 65000, duration: 0 },
                { id: "eid1518", tween: [ "style", "${_slide_51}", "display", 'block', { fromValue: 'none'}], position: 50000, duration: 0 },
                { id: "eid1519", tween: [ "style", "${_slide_51}", "display", 'none', { fromValue: 'block'}], position: 51000, duration: 0 },
                { id: "eid1500", tween: [ "style", "${_slide_42}", "display", 'block', { fromValue: 'none'}], position: 41000, duration: 0 },
                { id: "eid1501", tween: [ "style", "${_slide_42}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0 },
                { id: "eid1578", tween: [ "style", "${_slide_79}", "display", 'block', { fromValue: 'none'}], position: 78000, duration: 0 },
                { id: "eid1579", tween: [ "style", "${_slide_79}", "display", 'none', { fromValue: 'block'}], position: 79000, duration: 0 },
                { id: "eid1105", tween: [ "style", "${_slide_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1228", tween: [ "style", "${_slide_6}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid1229", tween: [ "style", "${_slide_6}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid1025", tween: [ "style", "${_slide_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1232", tween: [ "style", "${_slide_7}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid1233", tween: [ "style", "${_slide_7}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid1542", tween: [ "style", "${_slide_63}", "display", 'block', { fromValue: 'none'}], position: 62000, duration: 0 },
                { id: "eid1543", tween: [ "style", "${_slide_63}", "display", 'none', { fromValue: 'block'}], position: 63000, duration: 0 },
                { id: "eid1772", tween: [ "style", "${_bt_ini}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid1494", tween: [ "style", "${_slide_40}", "display", 'block', { fromValue: 'none'}], position: 39000, duration: 0 },
                { id: "eid1495", tween: [ "style", "${_slide_40}", "display", 'none', { fromValue: 'block'}], position: 40000, duration: 0 },
                { id: "eid1348", tween: [ "style", "${_instruccion}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1334", tween: [ "style", "${_slide_38}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0 },
                { id: "eid1335", tween: [ "style", "${_slide_38}", "display", 'none', { fromValue: 'block'}], position: 38000, duration: 0 },
                { id: "eid1608", tween: [ "style", "${_slide_94}", "display", 'block', { fromValue: 'none'}], position: 93000, duration: 0 },
                { id: "eid1609", tween: [ "style", "${_slide_94}", "display", 'none', { fromValue: 'block'}], position: 94000, duration: 0 },
                { id: "eid1554", tween: [ "style", "${_slide_69}", "display", 'block', { fromValue: 'none'}], position: 68000, duration: 0 },
                { id: "eid1555", tween: [ "style", "${_slide_69}", "display", 'none', { fromValue: 'block'}], position: 69000, duration: 0 },
                { id: "eid1568", tween: [ "style", "${_slide_76}", "display", 'block', { fromValue: 'none'}], position: 75000, duration: 0 },
                { id: "eid1569", tween: [ "style", "${_slide_76}", "display", 'none', { fromValue: 'block'}], position: 76000, duration: 0 },
                { id: "eid1322", tween: [ "style", "${_slide_33}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid1324", tween: [ "style", "${_slide_33}", "display", 'none', { fromValue: 'block'}], position: 33000, duration: 0 },
                { id: "eid1104", tween: [ "style", "${_slide_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1226", tween: [ "style", "${_slide_5}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid1227", tween: [ "style", "${_slide_5}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid1612", tween: [ "style", "${_slide_96}", "display", 'block', { fromValue: 'none'}], position: 95000, duration: 0 },
                { id: "eid1613", tween: [ "style", "${_slide_96}", "display", 'none', { fromValue: 'block'}], position: 96000, duration: 0 },
                { id: "eid1582", tween: [ "style", "${_slide_81}", "display", 'block', { fromValue: 'none'}], position: 80000, duration: 0 },
                { id: "eid1583", tween: [ "style", "${_slide_81}", "display", 'none', { fromValue: 'block'}], position: 81000, duration: 0 },
                { id: "eid1506", tween: [ "style", "${_slide_45}", "display", 'block', { fromValue: 'none'}], position: 44000, duration: 0 },
                { id: "eid1507", tween: [ "style", "${_slide_45}", "display", 'none', { fromValue: 'block'}], position: 45000, duration: 0 },
                { id: "eid1590", tween: [ "style", "${_slide_85}", "display", 'block', { fromValue: 'none'}], position: 84000, duration: 0 },
                { id: "eid1591", tween: [ "style", "${_slide_85}", "display", 'none', { fromValue: 'block'}], position: 85000, duration: 0 },
                { id: "eid1616", tween: [ "style", "${_slide_98}", "display", 'block', { fromValue: 'none'}], position: 97000, duration: 0 },
                { id: "eid1617", tween: [ "style", "${_slide_98}", "display", 'none', { fromValue: 'block'}], position: 98000, duration: 0 }            ]
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
                    rect: ['0px', '-8px', '145px', '145px', 'auto', 'auto'],
                    id: 'nav_next',
                    type: 'image',
                    clip: ['rect(5.599853515625px 50.7998046875px 76.39990234375px 4px)'],
                    fill: ['rgba(0,0,0,0)', 'images/nav.png', '0px', '0px', '70px', '70px']
                },
                {
                    rect: ['0px', '0px', '60px', '64px', 'auto', 'auto'],
                    type: 'rect',
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
            "${symbolSelector}": [
                ["style", "height", '64px'],
                ["style", "width", '60px']
            ],
            "${_nav_next}": [
                ["style", "top", '-9px'],
                ["style", "clip", [8.849853515625,60.2998046875,72.64990234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "height", '145px'],
                ["style", "background-size", [145,145], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "background-position", [-82.5,-1], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '145px']
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
                    rect: ['-4px', '-8px', '145px', '145px', 'auto', 'auto'],
                    id: 'nav_back',
                    type: 'image',
                    clip: ['rect(5.599853515625px 50.7998046875px 76.39990234375px 4px)'],
                    fill: ['rgba(0,0,0,0)', 'images/nav.png', '0px', '0px', '70px', '70px']
                },
                {
                    rect: ['0px', '0px', '70px', '70px', 'auto', 'auto'],
                    type: 'rect',
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
                ["style", "background-position", [-3,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '145px'],
                ["style", "background-size", [145,145], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-4px'],
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
                    rect: ['0px', '0px', '40px', '40px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,0.35)'],
                ["style", "height", '40px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '40px']
            ],
            "${symbolSelector}": [
                ["style", "height", '40px'],
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
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['11px', '21px', '958px', '538px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ],
            "${_Rectangle}": [
                ["style", "top", '21px'],
                ["style", "height", '538px'],
                ["style", "left", '11px'],
                ["style", "width", '958px']
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
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['11px', '21px', '958px', '538px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '980px']
            ],
            "${_Rectangle}": [
                ["style", "height", '538px'],
                ["style", "top", '21px'],
                ["style", "left", '11px'],
                ["style", "width", '958px']
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
                    rect: ['0px', '0px', '117px', '115px', 'auto', 'auto'],
                    id: 'home_up',
                    type: 'image',
                    clip: ['rect(0px 54.6005859375px 57.39990234375px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/home.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '117px', '115px', 'auto', 'auto'],
                    id: 'home',
                    type: 'image',
                    clip: ['rect(62.39990234375px 50.599609375px 115px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/home.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_home_up}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "clip", [0,54.6005859375,57.39990234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_home}": [
                ["style", "top", '-61px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [62.39990234375,50.599609375,115,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid1760", tween: [ "style", "${_home}", "top", '-61px', { fromValue: '-61px'}], position: 0, duration: 0 },
                { id: "eid1299", tween: [ "style", "${_home}", "top", '-61px', { fromValue: '-61px'}], position: 500, duration: 0 },
                { id: "eid1298", tween: [ "style", "${_home}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1761", tween: [ "style", "${_home_up}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 }            ]
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
"slide_52": {
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
"slide_53": {
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
"slide_54": {
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
"slide_55": {
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
"slide_56": {
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
"slide_57": {
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
"slide_58": {
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
"slide_59": {
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
"slide_60": {
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
"slide_61": {
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
"slide_62": {
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
"slide_63": {
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
"slide_64": {
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
"slide_65": {
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
"slide_66": {
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
"slide_67": {
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
"slide_68": {
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
"slide_69": {
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
"slide_70": {
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
"slide_71": {
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
"slide_72": {
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
"slide_73": {
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
"slide_74": {
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
"slide_75": {
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
"slide_76": {
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
"slide_77": {
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
"slide_78": {
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
"slide_79": {
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
"slide_80": {
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
"slide_81": {
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
"slide_82": {
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
"slide_83": {
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
"slide_84": {
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
"slide_85": {
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
"slide_86": {
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
"slide_87": {
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
"slide_88": {
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
"slide_89": {
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
"slide_90": {
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
"slide_91": {
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
"slide_92": {
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
"slide_93": {
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
"slide_94": {
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
"slide_95": {
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
"slide_96": {
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
"slide_97": {
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
"slide_98": {
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
"slide_99": {
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
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '100px']
            ],
            "${_bt_off}": [
                ["style", "top", '-52px'],
                ["style", "opacity", '0'],
                ["style", "left", '-102px']
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
"bt_ini": {
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
                    rect: ['-71px', '0px', '137px', '100px', 'auto', 'auto'],
                    transform: [[], [], [], ['1.49631']],
                    id: 'bt_down',
                    type: 'image',
                    clip: ['rect(0px 137px 100px 68.96912384033203px)'],
                    fill: ['rgba(0,0,0,0)', 'images/bt_ini.png', '0px', '0px']
                },
                {
                    rect: ['34px', '-3px', '137px', '106px', 'auto', 'auto'],
                    transform: [[], [], [], ['1.49631', '0.9434']],
                    id: 'bt_up',
                    type: 'image',
                    clip: ['rect(0px 69.09991455078125px 106px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/bt_ini.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bt_down}": [
                ["style", "top", '0px'],
                ["style", "height", '100px'],
                ["transform", "scaleX", '1.49631'],
                ["style", "opacity", '0'],
                ["style", "left", '-71px'],
                ["style", "clip", [0,137,100,68.96912384033203], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px']
            ],
            "${_bt_up}": [
                ["style", "top", '-3px'],
                ["transform", "scaleY", '0.9434'],
                ["transform", "scaleX", '1.49631'],
                ["style", "opacity", '1'],
                ["style", "clip", [0,69.09991455078125,106,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '34px']
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
                { id: "eid1660", tween: [ "style", "${_bt_down}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid1661", tween: [ "style", "${_bt_up}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 }            ]
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
            "${_bt_off}": [
                ["style", "top", '-52px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
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
                    rect: ['-11px', '152px', '915px', '175px', 'auto', 'auto'],
                    id: 'mountains',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/mountains.png', '0px', '0px']
                },
                {
                    rect: ['662px', '91px', '244px', '194px', 'auto', 'auto'],
                    id: 'img-map19',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map19.png', '0px', '0px']
                },
                {
                    rect: ['752px', '218px', '111px', '94px', 'auto', 'auto'],
                    id: 'img-map18',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map18.png', '0px', '0px']
                },
                {
                    rect: ['634px', '219px', '198px', '279px', 'auto', 'auto'],
                    id: 'img-map17',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map17.png', '0px', '0px']
                },
                {
                    rect: ['601px', '227px', '198px', '198px', 'auto', 'auto'],
                    id: 'img-map16',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map16.png', '0px', '0px']
                },
                {
                    rect: ['603px', '207px', '158px', '131px', 'auto', 'auto'],
                    id: 'img-map15',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map15.png', '0px', '0px']
                },
                {
                    rect: ['569px', '198px', '80px', '142px', 'auto', 'auto'],
                    id: 'img-map14',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map14.png', '0px', '0px']
                },
                {
                    rect: ['572px', '122px', '222px', '144px', 'auto', 'auto'],
                    id: 'img-map13',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map13.png', '0px', '0px']
                },
                {
                    rect: ['562px', '351px', '132px', '222px', 'auto', 'auto'],
                    id: 'img-map12',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map12.png', '0px', '0px']
                },
                {
                    rect: ['446px', '304px', '232px', '220px', 'auto', 'auto'],
                    id: 'img-map11',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map11.png', '0px', '0px']
                },
                {
                    rect: ['455px', '229px', '200px', '134px', 'auto', 'auto'],
                    id: 'img-map10',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map10.png', '0px', '0px']
                },
                {
                    rect: ['481px', '206px', '124px', '70px', 'auto', 'auto'],
                    id: 'img-map9',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map9.png', '0px', '0px']
                },
                {
                    rect: ['455px', '129px', '180px', '114px', 'auto', 'auto'],
                    id: 'img-map8',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map8.png', '0px', '0px']
                },
                {
                    rect: ['324px', '248px', '206px', '322px', 'auto', 'auto'],
                    id: 'img-map7',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map7.png', '0px', '0px']
                },
                {
                    rect: ['373px', '196px', '142px', '145px', 'auto', 'auto'],
                    id: 'img-map6',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map6.png', '0px', '0px']
                },
                {
                    rect: ['278px', '216px', '167px', '105px', 'auto', 'auto'],
                    id: 'img-map4',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map4.png', '0px', '0px']
                },
                {
                    rect: ['235px', '262px', '238px', '300px', 'auto', 'auto'],
                    id: 'img-map3',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map3.png', '0px', '0px']
                },
                {
                    rect: ['52px', '220px', '328px', '290px', 'auto', 'auto'],
                    id: 'img-map2',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map2.png', '0px', '0px']
                },
                {
                    rect: ['11px', '136px', '355px', '185px', 'auto', 'auto'],
                    id: 'img-map1',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map1.png', '0px', '0px']
                },
                {
                    rect: ['273px', '159px', '245px', '106px', 'auto', 'auto'],
                    id: 'img-map5',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img-map5.png', '0px', '0px']
                },
                {
                    rect: ['-21px', '153px', '890px', '356px', 'auto', 'auto'],
                    id: 'rutes-map',
                    transform: [[], [], [], ['0.8', '0.8']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/rutes-map.png', '0px', '0px']
                },
                {
                    id: 'pointer1',
                    type: 'image',
                    rect: ['728px', '200px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    id: 'pointer2',
                    type: 'image',
                    rect: ['728px', '260px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    id: 'pointer3',
                    type: 'image',
                    rect: ['716px', '338px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    id: 'pointer4',
                    type: 'image',
                    rect: ['425px', '432px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    id: 'Pointer5',
                    type: 'image',
                    rect: ['358px', '305px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    id: 'Pointer6',
                    type: 'image',
                    rect: ['271px', '202px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    id: 'pointer7',
                    type: 'image',
                    rect: ['220px', '397px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                },
                {
                    id: 'pointer8',
                    type: 'image',
                    rect: ['110px', '306px', '24px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/map-point.png', '0px', '0px']
                }
            ],
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
            "${_pointer2}": [
                ["transform", "scaleX", '0'],
                ["style", "left", '728px'],
                ["transform", "scaleY", '0'],
                ["style", "top", '260px']
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
            "${_img-map7}": [
                ["style", "top", '248px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '324px']
            ],
            "${_img-map16}": [
                ["style", "top", '227px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '601px']
            ],
            "${_mountains}": [
                ["style", "top", '201px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '-11px']
            ],
            "${_img-map19}": [
                ["style", "top", '91px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '662px']
            ],
            "${_img-map18}": [
                ["style", "top", '218px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '752px']
            ],
            "${symbolSelector}": [
                ["style", "height", '580px'],
                ["style", "width", '980px']
            ],
            "${_img-map10}": [
                ["style", "top", '229px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '455px']
            ],
            "${_img-map9}": [
                ["style", "top", '206px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '481px']
            ],
            "${_pointer3}": [
                ["transform", "scaleX", '0'],
                ["style", "left", '716px'],
                ["transform", "scaleY", '0'],
                ["style", "top", '338px']
            ],
            "${_img-map14}": [
                ["style", "top", '198px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '569px']
            ],
            "${_img-map8}": [
                ["style", "top", '129px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '455px']
            ],
            "${_pointer8}": [
                ["transform", "scaleX", '0'],
                ["style", "left", '110px'],
                ["transform", "scaleY", '0'],
                ["style", "top", '306px']
            ],
            "${_pointer7}": [
                ["transform", "scaleX", '0'],
                ["style", "left", '220px'],
                ["transform", "scaleY", '0'],
                ["style", "top", '397px']
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
            "${_img-map6}": [
                ["style", "top", '196px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '373px']
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
            "${_img-map3}": [
                ["style", "top", '262px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '235px']
            ],
            "${_pointer4}": [
                ["transform", "scaleX", '0'],
                ["style", "left", '425px'],
                ["transform", "scaleY", '0'],
                ["style", "top", '432px']
            ],
            "${_Pointer5}": [
                ["transform", "scaleX", '0'],
                ["style", "left", '358px'],
                ["transform", "scaleY", '0'],
                ["style", "top", '305px']
            ],
            "${_Pointer6}": [
                ["transform", "scaleX", '0'],
                ["style", "left", '271px'],
                ["transform", "scaleY", '0'],
                ["style", "top", '202px']
            ],
            "${_pointer1}": [
                ["transform", "scaleX", '0'],
                ["style", "left", '728px'],
                ["transform", "scaleY", '0'],
                ["style", "top", '200px']
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
            duration: 3920,
            autoPlay: true,
            timeline: [
                { id: "eid1808", tween: [ "transform", "${_img-map6}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2550, duration: 500, easing: "easeOutBack" },
                { id: "eid1786", tween: [ "transform", "${_pointer2}", "scaleX", '1', { fromValue: '0'}], position: 3050, duration: 500, easing: "easeOutBack" },
                { id: "eid1789", tween: [ "transform", "${_pointer1}", "scaleY", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid1830", tween: [ "style", "${_img-map13}", "opacity", '1', { fromValue: '0'}], position: 2115, duration: 500, easing: "easeOutBack" },
                { id: "eid1828", tween: [ "transform", "${_img-map12}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2190, duration: 500, easing: "easeOutBack" },
                { id: "eid1825", tween: [ "transform", "${_img-map11}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2250, duration: 500, easing: "easeOutBack" },
                { id: "eid1804", tween: [ "transform", "${_img-map3}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2690, duration: 500, easing: "easeOutBack" },
                { id: "eid1803", tween: [ "style", "${_img-map3}", "opacity", '1', { fromValue: '0'}], position: 2690, duration: 500, easing: "easeOutBack" },
                { id: "eid1832", tween: [ "transform", "${_img-map14}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2050, duration: 500, easing: "easeOutBack" },
                { id: "eid1842", tween: [ "style", "${_img-map17}", "opacity", '1', { fromValue: '0'}], position: 1870, duration: 500, easing: "easeOutBack" },
                { id: "eid1779", tween: [ "transform", "${_Pointer6}", "scaleY", '1', { fromValue: '0'}], position: 3305, duration: 500, easing: "easeOutBack" },
                { id: "eid1822", tween: [ "transform", "${_img-map10}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2305, duration: 500, easing: "easeOutBack" },
                { id: "eid1839", tween: [ "style", "${_img-map16}", "opacity", '1', { fromValue: '0'}], position: 1925, duration: 500, easing: "easeOutBack" },
                { id: "eid1821", tween: [ "style", "${_img-map10}", "opacity", '1', { fromValue: '0'}], position: 2305, duration: 500, easing: "easeOutBack" },
                { id: "eid1827", tween: [ "style", "${_img-map12}", "opacity", '1', { fromValue: '0'}], position: 2190, duration: 500, easing: "easeOutBack" },
                { id: "eid1775", tween: [ "transform", "${_pointer8}", "scaleY", '1', { fromValue: '0'}], position: 3420, duration: 500, easing: "easeOutBack" },
                { id: "eid1790", tween: [ "transform", "${_rutes-map}", "scaleX", '0.78', { fromValue: '1'}], position: 2750, duration: 620, easing: "easeOutBack" },
                { id: "eid1817", tween: [ "transform", "${_img-map9}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2370, duration: 500, easing: "easeOutBack" },
                { id: "eid1819", tween: [ "transform", "${_img-map9}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2370, duration: 500, easing: "easeOutBack" },
                { id: "eid1831", tween: [ "transform", "${_img-map13}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2115, duration: 500, easing: "easeOutBack" },
                { id: "eid1782", tween: [ "transform", "${_pointer4}", "scaleX", '1', { fromValue: '0'}], position: 3190, duration: 500, easing: "easeOutBack" },
                { id: "eid1778", tween: [ "transform", "${_Pointer6}", "scaleX", '1', { fromValue: '0'}], position: 3305, duration: 500, easing: "easeOutBack" },
                { id: "eid1809", tween: [ "style", "${_img-map6}", "opacity", '1', { fromValue: '0'}], position: 2550, duration: 500, easing: "easeOutBack" },
                { id: "eid1800", tween: [ "style", "${_img-map2}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 500, easing: "easeOutBack" },
                { id: "eid1818", tween: [ "style", "${_img-map9}", "opacity", '1', { fromValue: '0'}], position: 2370, duration: 500, easing: "easeOutBack" },
                { id: "eid1788", tween: [ "transform", "${_pointer1}", "scaleX", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid1805", tween: [ "transform", "${_img-map4}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2615, duration: 500, easing: "easeOutBack" },
                { id: "eid1780", tween: [ "transform", "${_Pointer5}", "scaleX", '1', { fromValue: '0'}], position: 3250, duration: 500, easing: "easeOutBack" },
                { id: "eid1794", tween: [ "style", "${_img-map5}", "opacity", '1', { fromValue: '0'}], position: 2870, duration: 500, easing: "easeOutBack" },
                { id: "eid1791", tween: [ "style", "${_rutes-map}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 620, easing: "easeOutBack" },
                { id: "eid1843", tween: [ "transform", "${_img-map17}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1870, duration: 500, easing: "easeOutBack" },
                { id: "eid1798", tween: [ "transform", "${_img-map1}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2805, duration: 500, easing: "easeOutBack" },
                { id: "eid1793", tween: [ "transform", "${_img-map5}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2870, duration: 500, easing: "easeOutBack" },
                { id: "eid1851", tween: [ "style", "${_mountains}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid1850", tween: [ "style", "${_mountains}", "top", '73px', { fromValue: '201px'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid1812", tween: [ "style", "${_img-map7}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid1835", tween: [ "transform", "${_img-map15}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1774", tween: [ "transform", "${_pointer8}", "scaleX", '1', { fromValue: '0'}], position: 3420, duration: 500, easing: "easeOutBack" },
                { id: "eid1806", tween: [ "style", "${_img-map4}", "opacity", '1', { fromValue: '0'}], position: 2615, duration: 500, easing: "easeOutBack" },
                { id: "eid1849", tween: [ "transform", "${_img-map19}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid1795", tween: [ "transform", "${_img-map5}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2870, duration: 500, easing: "easeOutBack" },
                { id: "eid1829", tween: [ "transform", "${_img-map13}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2115, duration: 500, easing: "easeOutBack" },
                { id: "eid1797", tween: [ "style", "${_img-map1}", "opacity", '1', { fromValue: '0'}], position: 2805, duration: 500, easing: "easeOutBack" },
                { id: "eid1807", tween: [ "transform", "${_img-map4}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2615, duration: 500, easing: "easeOutBack" },
                { id: "eid1787", tween: [ "transform", "${_pointer2}", "scaleY", '1', { fromValue: '0'}], position: 3050, duration: 500, easing: "easeOutBack" },
                { id: "eid1811", tween: [ "transform", "${_img-map7}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid1792", tween: [ "transform", "${_rutes-map}", "scaleY", '0.78', { fromValue: '1'}], position: 2750, duration: 620, easing: "easeOutBack" },
                { id: "eid1820", tween: [ "transform", "${_img-map10}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2305, duration: 500, easing: "easeOutBack" },
                { id: "eid1845", tween: [ "style", "${_img-map18}", "opacity", '1', { fromValue: '0'}], position: 1805, duration: 500, easing: "easeOutBack" },
                { id: "eid1810", tween: [ "transform", "${_img-map6}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2550, duration: 500, easing: "easeOutBack" },
                { id: "eid1846", tween: [ "transform", "${_img-map18}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1805, duration: 500, easing: "easeOutBack" },
                { id: "eid1848", tween: [ "style", "${_img-map19}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid1815", tween: [ "style", "${_img-map8}", "opacity", '1', { fromValue: '0'}], position: 2425, duration: 500, easing: "easeOutBack" },
                { id: "eid1837", tween: [ "transform", "${_img-map15}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1813", tween: [ "transform", "${_img-map7}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid1799", tween: [ "transform", "${_img-map2}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2750, duration: 500, easing: "easeOutBack" },
                { id: "eid1777", tween: [ "transform", "${_pointer7}", "scaleY", '1', { fromValue: '0'}], position: 3370, duration: 500, easing: "easeOutBack" },
                { id: "eid1838", tween: [ "transform", "${_img-map16}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1925, duration: 500, easing: "easeOutBack" },
                { id: "eid1841", tween: [ "transform", "${_img-map17}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1870, duration: 500, easing: "easeOutBack" },
                { id: "eid1836", tween: [ "style", "${_img-map15}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1834", tween: [ "transform", "${_img-map14}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2050, duration: 500, easing: "easeOutBack" },
                { id: "eid1785", tween: [ "transform", "${_pointer3}", "scaleY", '1', { fromValue: '0'}], position: 3115, duration: 500, easing: "easeOutBack" },
                { id: "eid1833", tween: [ "style", "${_img-map14}", "opacity", '1', { fromValue: '0'}], position: 2050, duration: 500, easing: "easeOutBack" },
                { id: "eid1844", tween: [ "transform", "${_img-map18}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1805, duration: 500, easing: "easeOutBack" },
                { id: "eid1776", tween: [ "transform", "${_pointer7}", "scaleX", '1', { fromValue: '0'}], position: 3370, duration: 500, easing: "easeOutBack" },
                { id: "eid1826", tween: [ "transform", "${_img-map12}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2190, duration: 500, easing: "easeOutBack" },
                { id: "eid1796", tween: [ "transform", "${_img-map1}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2805, duration: 500, easing: "easeOutBack" },
                { id: "eid1824", tween: [ "style", "${_img-map11}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutBack" },
                { id: "eid1781", tween: [ "transform", "${_Pointer5}", "scaleY", '1', { fromValue: '0'}], position: 3250, duration: 500, easing: "easeOutBack" },
                { id: "eid1816", tween: [ "transform", "${_img-map8}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2425, duration: 500, easing: "easeOutBack" },
                { id: "eid1784", tween: [ "transform", "${_pointer3}", "scaleX", '1', { fromValue: '0'}], position: 3115, duration: 500, easing: "easeOutBack" },
                { id: "eid1802", tween: [ "transform", "${_img-map3}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2690, duration: 500, easing: "easeOutBack" },
                { id: "eid1847", tween: [ "transform", "${_img-map19}", "scaleX", '0.8', { fromValue: '0.1'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid1814", tween: [ "transform", "${_img-map8}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2425, duration: 500, easing: "easeOutBack" },
                { id: "eid1823", tween: [ "transform", "${_img-map11}", "scaleX", '0.8', { fromValue: '0.1'}], position: 2250, duration: 500, easing: "easeOutBack" },
                { id: "eid1783", tween: [ "transform", "${_pointer4}", "scaleY", '1', { fromValue: '0'}], position: 3190, duration: 500, easing: "easeOutBack" },
                { id: "eid1840", tween: [ "transform", "${_img-map16}", "scaleY", '0.8', { fromValue: '0.1'}], position: 1925, duration: 500, easing: "easeOutBack" },
                { id: "eid1801", tween: [ "transform", "${_img-map2}", "scaleY", '0.8', { fromValue: '0.1'}], position: 2750, duration: 500, easing: "easeOutBack" }            ]
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
