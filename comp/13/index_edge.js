/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif']='<script src=\"http://use.edgefonts.net/cabin:n4,i4,n7,i7,n5,i5,n6,i6:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'false',

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
                id: 'hotspot_solucion',
                display: 'none',
                type: 'rect',
                rect: ['444px', '483px','45px','45px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'slide1',
                type: 'rect',
                rect: ['20', '123','auto','auto','auto', 'auto']
            },
            {
                id: 'success',
                type: 'audio',
                tag: 'audio',
                rect: ['-6557px', '399','320px','45px','auto', 'auto'],
                source: ['media/success.mp3','media/success.ogg'],
                preload: 'false'
            },
            {
                id: 'error',
                type: 'audio',
                tag: 'audio',
                rect: ['396', '399','320px','45px','auto', 'auto'],
                source: ['media/error.mp3','media/error.ogg'],
                preload: 'false'
            },
            {
                id: 'ok_bad',
                type: 'group',
                rect: ['-355px', '-11px','0','0','auto', 'auto'],
                c: [
                {
                    id: 'bad1',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok1',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad2',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok2',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad3',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok3',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad4',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok4',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad5',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok5',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad6',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok6',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad7',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok7',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad8',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok8',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad9',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok9',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad10',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok10',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad11',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok11',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad12',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok12',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad13',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok13',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad14',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok14',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad15',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok15',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad16',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok16',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad17',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok17',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad18',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok18',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad19',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok19',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad20',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok20',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad21',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok21',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad22',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok22',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad23',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok23',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok24',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad24',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok25',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad25',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok26',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad26',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad27',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok27',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad28',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok28',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad29',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok29',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad30',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok30',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad31',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok31',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad32',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok32',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad33',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok33',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad34',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok34',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad35',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok35',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad36',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok36',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad37',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok137',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad38',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok38',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad39',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok39',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad40',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok40',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad41',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok41',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad42',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok42',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad43',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok43',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad44',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok44',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad45',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok45',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad46',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok46',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad47',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok47',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad48',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok48',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad49',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok49',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad50',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok50',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['202px', '120px','600px','103px','auto', 'auto'],
                opacity: 1,
                text: "¿Cuántos niños mueren al año antes de cumplir 5 años por desatención médica en el mundo?",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(38,68,103,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['26.4%', '258px','583px','30px','auto', 'auto'],
                text: "3 millones.<br>",
                font: ['Arial, Helvetica, sans-serif', 25, "rgba(38,68,103,1.00)", "normal", "none", ""]
            },
            {
                id: 'checkbox_1',
                display: 'block',
                type: 'rect',
                rect: ['198px', '254px','49px','50px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                opacity: 1,
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(255,255,255,0.00)","none"],
                userClass: "check-on",
                transform: [[],[],[],['0.2','0.2']]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['26.4%', '319px','583px','45px','auto', 'auto'],
                text: " 1 millón.<br>",
                font: ['Arial, Helvetica, sans-serif', 25, "rgba(38,68,103,1.00)", "normal", "none", ""]
            },
            {
                id: 'checkbox_2',
                display: 'block',
                type: 'rect',
                rect: ['198px', '315px','49px','50px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(255,255,255,0.00)","none"],
                userClass: "check-on",
                transform: [[],[],[],['0.2','0.2']]
            },
            {
                id: 'TextCopy3',
                type: 'text',
                rect: ['26.4%', '378px','583px','30px','auto', 'auto'],
                text: "Menos de 100 mil.<br>",
                font: ['Arial, Helvetica, sans-serif', 25, "rgba(38,68,103,1.00)", "normal", "none", ""]
            },
            {
                id: 'checkbox_3',
                display: 'block',
                type: 'rect',
                rect: ['198px', '374px','49px','50px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(255,255,255,0.00)","none"],
                userClass: "check-on",
                transform: [[],[],[],['0.2','0.2']]
            },
            {
                id: 'TextCopy4',
                type: 'text',
                rect: ['26.4%', '436px','583px','30px','auto', 'auto'],
                text: "Más de 6 millones.",
                font: ['Arial, Helvetica, sans-serif', 25, "rgba(38,68,103,1.00)", "normal", "none", ""]
            },
            {
                id: 'checkbox_4',
                display: 'block',
                type: 'rect',
                rect: ['198px', '432px','49px','50px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(255,255,255,0.00)","none"],
                userClass: "check-on",
                transform: [[],[],[],['0.2','0.2']]
            },
            {
                id: 'resp_incorrecta',
                display: 'none',
                type: 'image',
                rect: ['293px', '257px','434px','148px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"msg_incorrecto.png",'0px','0px']
            },
            {
                id: 'resp_correcta',
                display: 'none',
                type: 'image',
                rect: ['292px', '257px','434px','148px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"msg_correcto.png",'0px','0px']
            },
            {
                id: 'help_checkbox',
                display: 'none',
                type: 'image',
                rect: ['222px', '190px','531px','249px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"help_checkbox.png",'0px','0px']
            },
            {
                id: 'bt_ayuda',
                type: 'rect',
                rect: ['520px', '483px','45px','45px','auto', 'auto']
            },
            {
                id: 'bt_reiniciar',
                type: 'rect',
                rect: ['470px', '483px','45px','45px','auto', 'auto']
            },
            {
                id: 'bt_solucion',
                display: 'none',
                type: 'rect',
                rect: ['444px', '483px','45px','45px','auto', 'auto']
            },
            {
                id: 'bt_validar',
                type: 'rect',
                rect: ['420px', '483px','45px','45px','auto', 'auto']
            },
            {
                id: 'hotspot_ayuda',
                type: 'rect',
                rect: ['520px', '483px','45px','45px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_reiniciar',
                type: 'rect',
                rect: ['470px', '483px','45px','45px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_validar',
                type: 'rect',
                rect: ['420px', '483px','45px','45px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [
            {
                id: 'ok2',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad39',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad5',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok22',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok35',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad26',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad22',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad30',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad11',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad16',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bt_solucion',
                symbolName: 'bt_solucion',
                autoPlay: {

                }
            },
            {
                id: 'bad37',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad27',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad13',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad41',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad8',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok33',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok34',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad33',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok40',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok29',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad31',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok26',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad14',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok4',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bt_validar',
                symbolName: 'bt_validar',
                autoPlay: {

                }
            },
            {
                id: 'bad7',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad12',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok11',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad6',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bt_reiniciar',
                symbolName: 'bt_reiniciar',
                autoPlay: {

                }
            },
            {
                id: 'bt_ayuda',
                symbolName: 'bt_ayuda',
                autoPlay: {

                }
            },
            {
                id: 'ok9',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok42',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok23',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad21',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok47',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad38',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad3',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'slide1',
                symbolName: 'slide1',
                autoPlay: {

                }
            },
            {
                id: 'bad28',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad49',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok27',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok48',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad2',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad48',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad50',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad47',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok46',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok17',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok3',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad46',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok45',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok12',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok43',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad23',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok41',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok44',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok14',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad44',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad43',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok7',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok49',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok31',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad45',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad25',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok39',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad20',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok20',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad24',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok6',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok38',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok25',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad36',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad42',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok10',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok8',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad1',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok36',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok5',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad9',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok137',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad35',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad15',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad34',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad18',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok32',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok19',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad32',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok30',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok24',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad29',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad17',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok15',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad19',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok13',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok16',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad40',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad10',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok21',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok1',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad4',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok50',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok28',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok18',
                symbolName: 'ok',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bad40}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad37}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad22}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_resp_correcta}": [
                ["style", "top", '234px'],
                ["style", "display", 'none'],
                ["style", "height", '160px'],
                ["style", "left", '227px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '530px']
            ],
            "${_bad4}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad49}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad34}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok44}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok45}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad50}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok41}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad45}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok31}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad16}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_TextCopy4}": [
                ["style", "top", '436px'],
                ["style", "width", '583px'],
                ["color", "color", 'rgba(38,68,103,1.00)'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '26.43%'],
                ["style", "font-size", '25px']
            ],
            "${_ok26}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad2}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad39}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_hotspot_solucion}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '483px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '45px'],
                ["style", "display", 'none'],
                ["style", "left", '444px'],
                ["style", "width", '45px']
            ],
            "${_ok40}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok36}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bt_validar}": [
                ["style", "top", '590px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '45px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '420px'],
                ["style", "width", '45px']
            ],
            "${_ok42}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad30}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad11}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad20}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad44}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_success}": [
                ["style", "left", '-6557px']
            ],
            "${_TextCopy}": [
                ["style", "top", '258px'],
                ["style", "font-size", '25px'],
                ["style", "height", '30px'],
                ["color", "color", 'rgba(38,68,103,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '26.43%'],
                ["style", "width", '583px']
            ],
            "${_ok37}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bt_ayuda}": [
                ["style", "top", '590px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '45px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '520px'],
                ["style", "width", '45px']
            ],
            "${_hotspot_reiniciar}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '483px'],
                ["style", "height", '45px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '470px'],
                ["style", "width", '45px']
            ],
            "${_hotspot_validar}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '483px'],
                ["style", "height", '45px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '420px'],
                ["style", "width", '45px']
            ],
            "${_ok5}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_checkbox_4}": [
                ["style", "opacity", '1'],
                ["style", "left", '198px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.2'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.2'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '49px'],
                ["style", "top", '432px'],
                ["style", "height", '50px'],
                ["style", "display", 'block'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "cursor", 'auto']
            ],
            "${_ok1}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad32}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok18}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad28}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad19}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok15}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad27}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bt_solucion}": [
                ["style", "top", '590px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '45px'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1'],
                ["style", "left", '444px'],
                ["style", "width", '45px']
            ],
            "${_help_checkbox}": [
                ["style", "top", '205px'],
                ["style", "height", '234px'],
                ["style", "display", 'none'],
                ["style", "left", '264px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '497px']
            ],
            "${_ok34}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok23}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad41}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bt_reiniciar}": [
                ["style", "top", '590px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '45px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '470px'],
                ["style", "width", '45px']
            ],
            "${_ok19}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok49}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok8}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok12}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad42}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok9}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad38}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad23}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_Text}": [
                ["style", "top", '-100px'],
                ["style", "width", '600px'],
                ["color", "color", 'rgba(38,68,103,1.00)'],
                ["style", "height", '103px'],
                ["style", "opacity", '1'],
                ["style", "left", '202px'],
                ["style", "font-size", '40px']
            ],
            "${_bad26}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(211,227,195,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '580px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '980px']
            ],
            "${_ok_bad}": [
                ["style", "top", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '768px'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_ok29}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_resp_incorrecta}": [
                ["style", "top", '234px'],
                ["style", "display", 'none'],
                ["style", "height", '160px'],
                ["style", "left", '227px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '530px']
            ],
            "${_ok13}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad43}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad24}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok38}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok2}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad1}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_checkbox_2}": [
                ["style", "opacity", '1'],
                ["style", "left", '198px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.2'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.2'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '49px'],
                ["style", "top", '315px'],
                ["style", "display", 'block'],
                ["style", "height", '50px'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "cursor", 'auto']
            ],
            "${_bad7}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok16}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad31}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad18}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok17}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok27}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok21}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok50}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok22}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_checkbox_3}": [
                ["style", "opacity", '1'],
                ["style", "left", '198px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.2'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.2'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '49px'],
                ["style", "top", '374px'],
                ["style", "height", '50px'],
                ["style", "display", 'block'],
                ["style", "border-width", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_bad21}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok46}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_slide1}": [
                ["style", "top", '62px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '41px'],
                ["transform", "scaleX", '1']
            ],
            "${_bad15}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok48}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad12}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok35}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok24}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok47}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad33}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok10}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok32}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok11}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok7}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad6}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok25}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok137}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok20}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad9}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad14}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_checkbox_1}": [
                ["style", "opacity", '1'],
                ["style", "left", '198px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.2'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.2'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '49px'],
                ["style", "top", '254px'],
                ["style", "display", 'block'],
                ["style", "height", '50px'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "cursor", 'auto']
            ],
            "${_ok30}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad46}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad10}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok4}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad25}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '319px'],
                ["style", "width", '583px'],
                ["color", "color", 'rgba(38,68,103,1.00)'],
                ["style", "height", '45px'],
                ["style", "opacity", '0'],
                ["style", "left", '26.43%'],
                ["style", "font-size", '25px']
            ],
            "${_ok43}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok14}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad48}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad8}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok28}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '378px'],
                ["style", "font-size", '25px'],
                ["style", "height", '30px'],
                ["color", "color", 'rgba(38,68,103,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '26.43%'],
                ["style", "width", '583px']
            ],
            "${_flecha_c}": [
                ["style", "top", '112px'],
                ["style", "left", '116px']
            ],
            "${_hotspot_ayuda}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '483px'],
                ["style", "height", '45px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '520px'],
                ["style", "width", '45px']
            ],
            "${_bad35}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad29}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok3}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad13}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad3}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok33}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad17}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad36}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad47}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad5}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok39}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok6}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: false,
            timeline: [
                { id: "eid1438", tween: [ "transform", "${_checkbox_1}", "scaleY", '1', { fromValue: '0.2'}], position: 450, duration: 250 },
                { id: "eid1214", tween: [ "style", "${_ok30}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1248", tween: [ "style", "${_ok43}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1292", tween: [ "style", "${_ok_bad}", "width", '1366px', { fromValue: '1366px'}], position: 0, duration: 0 },
                { id: "eid1313", tween: [ "style", "${_slide1}", "left", '41px', { fromValue: '41px'}], position: 2250, duration: 0 },
                { id: "eid1235", tween: [ "style", "${_bad50}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1188", tween: [ "style", "${_ok13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1186", tween: [ "style", "${_ok14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1467", tween: [ "style", "${_hotspot_solucion}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1466", tween: [ "style", "${_bt_solucion}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1189", tween: [ "style", "${_bad13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1465", tween: [ "style", "${_bt_ayuda}", "top", '483px', { fromValue: '590px'}], position: 1550, duration: 300 },
                { id: "eid1194", tween: [ "style", "${_ok40}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1315", tween: [ "style", "${_slide1}", "top", '62px', { fromValue: '62px'}], position: 2250, duration: 0 },
                { id: "eid1433", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 250 },
                { id: "eid1246", tween: [ "style", "${_ok44}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1163", tween: [ "style", "${_bad5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1204", tween: [ "style", "${_ok35}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1283", tween: [ "style", "${_resp_incorrecta}", "width", '530px', { fromValue: '530px'}], position: 0, duration: 0 },
                { id: "eid1213", tween: [ "style", "${_bad31}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1164", tween: [ "style", "${_ok6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1232", tween: [ "style", "${_ok21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1178", tween: [ "style", "${_ok18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1184", tween: [ "style", "${_ok15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1299", tween: [ "style", "${_help_checkbox}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1234", tween: [ "style", "${_ok50}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1223", tween: [ "style", "${_bad26}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1158", tween: [ "style", "${_ok3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1160", tween: [ "style", "${_ok4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1459", tween: [ "style", "${_bt_validar}", "top", '483px', { fromValue: '590px'}], position: 1550, duration: 300 },
                { id: "eid1220", tween: [ "style", "${_ok27}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1199", tween: [ "style", "${_bad38}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1176", tween: [ "style", "${_ok19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1253", tween: [ "style", "${_bad41}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1233", tween: [ "style", "${_bad21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1244", tween: [ "style", "${_ok45}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1197", tween: [ "style", "${_bad39}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1171", tween: [ "style", "${_bad9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1175", tween: [ "style", "${_bad20}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1243", tween: [ "style", "${_bad46}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1441", tween: [ "transform", "${_checkbox_4}", "scaleX", '1', { fromValue: '0.2'}], position: 1245, duration: 300 },
                { id: "eid1437", tween: [ "transform", "${_checkbox_1}", "scaleX", '1', { fromValue: '0.2'}], position: 450, duration: 250 },
                { id: "eid1240", tween: [ "style", "${_ok47}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1201", tween: [ "style", "${_bad37}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1215", tween: [ "style", "${_bad30}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1227", tween: [ "style", "${_bad24}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1236", tween: [ "style", "${_ok49}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1228", tween: [ "style", "${_ok24}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1202", tween: [ "style", "${_ok36}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1289", tween: [ "style", "${_resp_incorrecta}", "top", '234px', { fromValue: '234px'}], position: 0, duration: 0 },
                { id: "eid1185", tween: [ "style", "${_bad15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1222", tween: [ "style", "${_ok22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1200", tween: [ "style", "${_ok137}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1182", tween: [ "style", "${_ok16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1156", tween: [ "style", "${_ok2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1181", tween: [ "style", "${_bad17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1210", tween: [ "style", "${_ok32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1159", tween: [ "style", "${_bad3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1231", tween: [ "style", "${_bad22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1242", tween: [ "style", "${_ok46}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1170", tween: [ "style", "${_ok9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1166", tween: [ "style", "${_ok7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1211", tween: [ "style", "${_bad32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1206", tween: [ "style", "${_ok34}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1295", tween: [ "style", "${_ok_bad}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1167", tween: [ "style", "${_bad7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1317", tween: [ "transform", "${_slide1}", "scaleY", '1', { fromValue: '1'}], position: 2250, duration: 0 },
                { id: "eid1161", tween: [ "style", "${_bad4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1230", tween: [ "style", "${_ok23}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1061", tween: [ "style", "${_ok1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1461", tween: [ "style", "${_bt_solucion}", "top", '483px', { fromValue: '590px'}], position: 1550, duration: 300 },
                { id: "eid1434", tween: [ "style", "${_TextCopy4}", "opacity", '1', { fromValue: '0'}], position: 1245, duration: 300 },
                { id: "eid1463", tween: [ "style", "${_bt_reiniciar}", "top", '483px', { fromValue: '590px'}], position: 1550, duration: 300 },
                { id: "eid1192", tween: [ "style", "${_ok11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1225", tween: [ "style", "${_bad25}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1157", tween: [ "style", "${_bad2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1183", tween: [ "style", "${_bad16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1247", tween: [ "style", "${_bad44}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1435", tween: [ "style", "${_TextCopy3}", "opacity", '1', { fromValue: '0'}], position: 950, duration: 295 },
                { id: "eid1436", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 450, duration: 250 },
                { id: "eid1165", tween: [ "style", "${_bad6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1187", tween: [ "style", "${_bad14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1439", tween: [ "transform", "${_checkbox_2}", "scaleX", '1', { fromValue: '0.2'}], position: 700, duration: 250 },
                { id: "eid1249", tween: [ "style", "${_bad43}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1219", tween: [ "style", "${_bad28}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1062", tween: [ "style", "${_bad1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1203", tween: [ "style", "${_bad36}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1198", tween: [ "style", "${_ok38}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1208", tween: [ "style", "${_ok33}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1168", tween: [ "style", "${_ok8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1241", tween: [ "style", "${_bad47}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1284", tween: [ "style", "${_resp_correcta}", "height", '160px', { fromValue: '160px'}], position: 0, duration: 0 },
                { id: "eid500", tween: [ "style", "${_resp_incorrecta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1162", tween: [ "style", "${_ok5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1286", tween: [ "style", "${_resp_correcta}", "left", '227px', { fromValue: '227px'}], position: 0, duration: 0 },
                { id: "eid1216", tween: [ "style", "${_ok29}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1229", tween: [ "style", "${_bad23}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1287", tween: [ "style", "${_resp_correcta}", "top", '234px', { fromValue: '234px'}], position: 0, duration: 0 },
                { id: "eid1239", tween: [ "style", "${_bad48}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1252", tween: [ "style", "${_ok41}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1190", tween: [ "style", "${_ok12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1177", tween: [ "style", "${_bad19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1221", tween: [ "style", "${_bad27}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1180", tween: [ "style", "${_ok17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1448", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '1'}], position: 30, duration: 0 },
                { id: "eid1294", tween: [ "style", "${_ok_bad}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1174", tween: [ "style", "${_ok20}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1224", tween: [ "style", "${_ok26}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1169", tween: [ "style", "${_bad8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1195", tween: [ "style", "${_bad40}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1316", tween: [ "transform", "${_slide1}", "scaleX", '1', { fromValue: '1'}], position: 2250, duration: 0 },
                { id: "eid1173", tween: [ "style", "${_bad10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid499", tween: [ "style", "${_resp_correcta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1209", tween: [ "style", "${_bad33}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1179", tween: [ "style", "${_bad18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1285", tween: [ "style", "${_resp_incorrecta}", "height", '160px', { fromValue: '160px'}], position: 0, duration: 0 },
                { id: "eid1205", tween: [ "style", "${_bad35}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1196", tween: [ "style", "${_ok39}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1245", tween: [ "style", "${_bad45}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1238", tween: [ "style", "${_ok48}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1237", tween: [ "style", "${_bad49}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1218", tween: [ "style", "${_ok28}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1172", tween: [ "style", "${_ok10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1193", tween: [ "style", "${_bad11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1282", tween: [ "style", "${_resp_correcta}", "width", '530px', { fromValue: '530px'}], position: 0, duration: 0 },
                { id: "eid1288", tween: [ "style", "${_resp_incorrecta}", "left", '227px', { fromValue: '227px'}], position: 0, duration: 0 },
                { id: "eid1191", tween: [ "style", "${_bad12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1443", tween: [ "transform", "${_checkbox_3}", "scaleX", '1', { fromValue: '0.2'}], position: 950, duration: 295 },
                { id: "eid1212", tween: [ "style", "${_ok31}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1226", tween: [ "style", "${_ok25}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1127", tween: [ "style", "${_ok37}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1293", tween: [ "style", "${_ok_bad}", "height", '768px', { fromValue: '768px'}], position: 0, duration: 0 },
                { id: "eid1250", tween: [ "style", "${_ok42}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1207", tween: [ "style", "${_bad34}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1251", tween: [ "style", "${_bad42}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1442", tween: [ "transform", "${_checkbox_4}", "scaleY", '1', { fromValue: '0.2'}], position: 1245, duration: 300 },
                { id: "eid1440", tween: [ "transform", "${_checkbox_2}", "scaleY", '1', { fromValue: '0.2'}], position: 700, duration: 250 },
                { id: "eid1217", tween: [ "style", "${_bad29}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1444", tween: [ "transform", "${_checkbox_3}", "scaleY", '1', { fromValue: '0.2'}], position: 950, duration: 295 },
                { id: "eid1446", tween: [ "style", "${_Text}", "top", '71px', { fromValue: '-100px'}], position: 0, duration: 450 }            ]
        }
    }
},
"ok": {
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
                    id: 'ok',
                    type: 'image',
                    rect: ['0px', '0px', '20px', '20px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ok.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ok}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
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
"bad": {
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
                    id: 'bad',
                    type: 'image',
                    rect: ['0px', '0px', '20px', '20px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bad.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
            ],
            "${_bad}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
"bt_validar": {
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
                    transform: [[0, 0], [], [], ['0.71', '0.71']],
                    type: 'image',
                    id: 'botones',
                    rect: ['-44px', '-22px', '290px', '140px', 'auto', 'auto'],
                    clip: ['rect(0px 70px 70px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '-70px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones}": [
                ["style", "top", '-21px'],
                ["transform", "scaleY", '0.72'],
                ["transform", "scaleX", '0.72'],
                ["style", "clip", [0,70,70,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-43px'],
                ["style", "background-position", [-72.222222222222,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '45px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '45px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1275", tween: [ "style", "${_botones}", "background-position", [-72.222222222222,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-72.222222222222,0]}], position: 0, duration: 0 },
                { id: "eid1274", tween: [ "style", "${_botones}", "background-position", [-76.388888666667,-70], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-72.222222222222,0]}], position: 250, duration: 0 },
                { id: "eid1301", tween: [ "style", "${_botones}", "top", '-21px', { fromValue: '-21px'}], position: 0, duration: 0 },
                { id: "eid1300", tween: [ "style", "${_botones}", "top", '-22px', { fromValue: '-21px'}], position: 250, duration: 0 },
                { id: "eid1325", tween: [ "style", "${_botones}", "left", '-43px', { fromValue: '-43px'}], position: 0, duration: 0 }            ]
        }
    }
},
"bt_solucion": {
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
                    type: 'image',
                    rect: ['-44px', '-23px', '290px', '140px', 'auto', 'auto'],
                    id: 'botones2',
                    transform: [[0, 0], [], [], ['0.71', '0.71']],
                    clip: ['rect(0px 70px 70px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '-73px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones2}": [
                ["style", "top", '-21px'],
                ["transform", "scaleY", '0.72'],
                ["transform", "scaleX", '0.72'],
                ["style", "clip", [0,70,70,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-43px'],
                ["style", "background-position", [-73,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '45px'],
                ["style", "width", '45px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1276", tween: [ "style", "${_botones2}", "background-position", [-73,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-73,0]}], position: 0, duration: 0 },
                { id: "eid1277", tween: [ "style", "${_botones2}", "background-position", [-73,-70], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-73,0]}], position: 250, duration: 0 },
                { id: "eid1302", tween: [ "style", "${_botones2}", "top", '-21px', { fromValue: '-21px'}], position: 0, duration: 0 },
                { id: "eid1303", tween: [ "style", "${_botones2}", "top", '-22px', { fromValue: '-21px'}], position: 250, duration: 0 }            ]
        }
    }
},
"bt_reiniciar": {
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
                    type: 'image',
                    rect: ['-45px', '-23px', '290px', '140px', 'auto', 'auto'],
                    id: 'botones3',
                    transform: [[0, 0], [], [], ['0.71', '0.71']],
                    clip: ['rect(0px 70px 70px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones3}": [
                ["style", "top", '-21px'],
                ["transform", "scaleY", '0.72'],
                ["transform", "scaleX", '0.72'],
                ["style", "background-position", [-146,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-44px'],
                ["style", "clip", [0,70,70,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '45px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '45px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1330", tween: [ "transform", "${_botones3}", "scaleX", '0.72', { fromValue: '0.72'}], position: 0, duration: 0 },
                { id: "eid1331", tween: [ "transform", "${_botones3}", "scaleY", '0.72', { fromValue: '0.72'}], position: 0, duration: 0 },
                { id: "eid1332", tween: [ "style", "${_botones3}", "left", '-44px', { fromValue: '-44px'}], position: 0, duration: 0 },
                { id: "eid1304", tween: [ "style", "${_botones3}", "top", '-21px', { fromValue: '-21px'}], position: 0, duration: 0 },
                { id: "eid1306", tween: [ "style", "${_botones3}", "top", '-22px', { fromValue: '-21px'}], position: 250, duration: 0 },
                { id: "eid1278", tween: [ "style", "${_botones3}", "background-position", [-146,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-146,0]}], position: 0, duration: 0 },
                { id: "eid1279", tween: [ "style", "${_botones3}", "background-position", [-146,-70], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-146,0]}], position: 250, duration: 0 }            ]
        }
    }
},
"bt_ayuda": {
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
                    type: 'image',
                    rect: ['-45px', '-23px', '290px', '140px', 'auto', 'auto'],
                    id: 'botones4',
                    transform: [[0, 0], [], [], ['0.71', '0.71']],
                    clip: ['rect(0px 70px 70px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones4}": [
                ["style", "top", '-21px'],
                ["transform", "scaleY", '0.72'],
                ["transform", "scaleX", '0.72'],
                ["style", "background-position", [-220,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-44px'],
                ["style", "clip", [0,70,70,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '45px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '45px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1307", tween: [ "style", "${_botones4}", "top", '-21px', { fromValue: '-21px'}], position: 0, duration: 0 },
                { id: "eid1311", tween: [ "style", "${_botones4}", "top", '-22px', { fromValue: '-21px'}], position: 250, duration: 0 },
                { id: "eid1334", tween: [ "transform", "${_botones4}", "scaleY", '0.72', { fromValue: '0.72'}], position: 0, duration: 0 },
                { id: "eid1335", tween: [ "style", "${_botones4}", "left", '-44px', { fromValue: '-44px'}], position: 0, duration: 0 },
                { id: "eid1336", tween: [ "style", "${_botones4}", "left", '-44px', { fromValue: '-44px'}], position: 250, duration: 0 },
                { id: "eid1333", tween: [ "transform", "${_botones4}", "scaleX", '0.72', { fromValue: '0.72'}], position: 0, duration: 0 },
                { id: "eid1280", tween: [ "style", "${_botones4}", "background-position", [-220,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-220,0]}], position: 0, duration: 0 },
                { id: "eid1281", tween: [ "style", "${_botones4}", "background-position", [-220,-70], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-220,0]}], position: 250, duration: 0 }            ]
        }
    }
},
"slide1": {
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
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '420px'],
                ["style", "width", '899px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
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
})(jQuery, AdobeEdge, "EDGE-7842101");
