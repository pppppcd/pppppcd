/******************************** 
 * Exp1（High_Enoughfitrst） *
 ********************************/


// store info about the experiment session:
let expName = 'exp1（high_enoughfitrst）';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
    'gender': ["\u5973", "\u7537"],
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color((-1.0000, -1.0000, -1.0000)),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(begin1RoutineBegin());
flowScheduler.add(begin1RoutineEachFrame());
flowScheduler.add(begin1RoutineEnd());
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(highCSC_introRoutineBegin());
flowScheduler.add(highCSC_introRoutineEachFrame());
flowScheduler.add(highCSC_introRoutineEnd());
const prac1_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac1_loopLoopBegin(prac1_loopLoopScheduler));
flowScheduler.add(prac1_loopLoopScheduler);
flowScheduler.add(prac1_loopLoopEnd);






flowScheduler.add(enough_beginRoutineBegin());
flowScheduler.add(enough_beginRoutineEachFrame());
flowScheduler.add(enough_beginRoutineEnd());
const condition1_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(condition1_loopLoopBegin(condition1_loopLoopScheduler));
flowScheduler.add(condition1_loopLoopScheduler);
flowScheduler.add(condition1_loopLoopEnd);






flowScheduler.add(restRoutineBegin());
flowScheduler.add(restRoutineEachFrame());
flowScheduler.add(restRoutineEnd());
flowScheduler.add(limit_introRoutineBegin());
flowScheduler.add(limit_introRoutineEachFrame());
flowScheduler.add(limit_introRoutineEnd());
const prac2_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac2_loopLoopBegin(prac2_loopLoopScheduler));
flowScheduler.add(prac2_loopLoopScheduler);
flowScheduler.add(prac2_loopLoopEnd);






flowScheduler.add(limit_beginRoutineBegin());
flowScheduler.add(limit_beginRoutineEachFrame());
flowScheduler.add(limit_beginRoutineEnd());
const condition2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(condition2LoopBegin(condition2LoopScheduler));
flowScheduler.add(condition2LoopScheduler);
flowScheduler.add(condition2LoopEnd);






flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'prac1.xlsx', 'path': 'prac1.xlsx'},
    {'name': 'prac1\1.jpg', 'path': 'prac1/1.jpg'},
    {'name': 'prac1\2.jpg', 'path': 'prac1/2.jpg'},
    {'name': 'image1.xlsx', 'path': 'image1.xlsx'},
    {'name': 'image1\1.jpg', 'path': 'image1/1.jpg'},
    {'name': 'image1\2.jpg', 'path': 'image1/2.jpg'},
    {'name': 'image1\3.jpg', 'path': 'image1/3.jpg'},
    {'name': 'image1\4.jpg', 'path': 'image1/4.jpg'},
    {'name': 'image1\5.jpg', 'path': 'image1/5.jpg'},
    {'name': 'image1\6.jpg', 'path': 'image1/6.jpg'},
    {'name': 'image1\7.jpg', 'path': 'image1/7.jpg'},
    {'name': 'image1\8.jpg', 'path': 'image1/8.jpg'},
    {'name': 'image1\9.jpg', 'path': 'image1/9.jpg'},
    {'name': 'image1\10.jpg', 'path': 'image1/10.jpg'},
    {'name': 'image1\11.jpg', 'path': 'image1/11.jpg'},
    {'name': 'image1\12.jpg', 'path': 'image1/12.jpg'},
    {'name': 'image1\13.jpg', 'path': 'image1/13.jpg'},
    {'name': 'image1\14.jpg', 'path': 'image1/14.jpg'},
    {'name': 'image1\15.jpg', 'path': 'image1/15.jpg'},
    {'name': 'image1\16.jpg', 'path': 'image1/16.jpg'},
    {'name': 'image1\17.jpg', 'path': 'image1/17.jpg'},
    {'name': 'image1\18.jpg', 'path': 'image1/18.jpg'},
    {'name': 'image1\19.jpg', 'path': 'image1/19.jpg'},
    {'name': 'image1\20.jpg', 'path': 'image1/20.jpg'},
    {'name': 'prac2.xlsx', 'path': 'prac2.xlsx'},
    {'name': 'prac2\1.jpg', 'path': 'prac2/1.jpg'},
    {'name': 'prac2\2.jpg', 'path': 'prac2/2.jpg'},
    {'name': 'image2.xlsx', 'path': 'image2.xlsx'},
    {'name': 'image2\21.jpg', 'path': 'image2/21.jpg'},
    {'name': 'image2\22.jpg', 'path': 'image2/22.jpg'},
    {'name': 'image2\23.jpg', 'path': 'image2/23.jpg'},
    {'name': 'image2\24.jpg', 'path': 'image2/24.jpg'},
    {'name': 'image2\25.jpg', 'path': 'image2/25.jpg'},
    {'name': 'image2\26.jpg', 'path': 'image2/26.jpg'},
    {'name': 'image2\27.jpg', 'path': 'image2/27.jpg'},
    {'name': 'image2\28.jpg', 'path': 'image2/28.jpg'},
    {'name': 'image2\29.jpg', 'path': 'image2/29.jpg'},
    {'name': 'image2\30.jpg', 'path': 'image2/30.jpg'},
    {'name': 'image2\31.jpg', 'path': 'image2/31.jpg'},
    {'name': 'image2\32.jpg', 'path': 'image2/32.jpg'},
    {'name': 'image2\33.jpg', 'path': 'image2/33.jpg'},
    {'name': 'image2\34.jpg', 'path': 'image2/34.jpg'},
    {'name': 'image2\35.jpg', 'path': 'image2/35.jpg'},
    {'name': 'image2\36.jpg', 'path': 'image2/36.jpg'},
    {'name': 'image2\37.jpg', 'path': 'image2/37.jpg'},
    {'name': 'image2\38.jpg', 'path': 'image2/38.jpg'},
    {'name': 'image2\39.jpg', 'path': 'image2/39.jpg'},
    {'name': 'image2\40.jpg', 'path': 'image2/40.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var begin1Clock;
var text;
var key_resp;
var introClock;
var text_2;
var key_resp_2;
var highCSC_introClock;
var text_6;
var key_resp_6;
var ITIClock;
var polygon;
var prac1_picture1Clock;
var image1;
var adjust_enoughClock;
var text_3;
var key_resp_3;
var prac1_picture2Clock;
var image1_2;
var negtive_ratingClock;
var slider;
var key_resp_4;
var text_4;
var text_5;
var enough_beginClock;
var text_7;
var key_resp_5;
var condition1_picture1Clock;
var image6;
var condition1_picture2Clock;
var image6_2;
var restClock;
var text_8;
var key_resp_7;
var limit_introClock;
var text_9;
var key_resp_8;
var prac2_picture1Clock;
var image7;
var adjust_limitClock;
var time;
var text_11;
var key_resp_9;
var prac2_picture2Clock;
var image7_2;
var limit_beginClock;
var text_10;
var key_resp_10;
var condition2_picture1Clock;
var image8;
var condition2_picture2Clock;
var image8_2;
var endClock;
var text_12;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "begin1"
  begin1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '您好，欢迎参加本次实验！本实验旨在研究情绪调节相关内容\n\n首先，您会看到一张图片。\n图片内容包含不同场景，可能会让您产生一些不适情绪。\n大约0.5秒后图片消失\n您可以选择使用“重新理解情境”和“转移注意力”两种不同的情绪调节方法来改善情绪。\n之后，同一张照片会再次出现，并持续呈现5秒。\n请您运用刚才选择的策略，尝试调节自己的情绪\n并请您对最后所感到的情绪进行评分。\n\n了解实验流程后，可按  “空格键”  进入下一页介绍两中情绪调节方法',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '以下是关于两种情绪调节策略的介绍\n\n1、重新理解情境：\n是指重新理解图片内容，给其一个合理的解释，从而改变你的感受。\n例如：图片里一个人站在高处边缘，你不一定理解为“很危险、很紧张”，\n也可以理解为“他站在安全观景台上看风景”。\n\n2、转移注意力：\n是指不改变对图片内容的理解，而是把注意力从容易引起情绪的部分移开\n将注意放到图片中比较中性的细节上。\n例如：图片里有一个让人紧张的场景，你可以不去想“这真危险”，\n而是注意“画面背景有几棵树”“衣服是什么颜色”“画面右下角有什么物体”。\n\n在理解两种策略后，请按  “空格键”  进入下一页',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "highCSC_intro"
  highCSC_introClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '您需要时刻有意识地关注自己的情绪状态，\n并灵活运用合适的调节策略，\n相信您可以成功地改变自己的情绪状态\n\n按  “空格键”  将进入练习阶段',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.03, 0.03],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "prac1_picture1"
  prac1_picture1Clock = new util.Clock();
  image1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "adjust_enough"
  adjust_enoughClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '请选择您想使用的情绪调节策略：\n\n重新理解情境  按 “F” 键\n\n转移注意力 按 “J” 键 \n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac1_picture2"
  prac1_picture2Clock = new util.Clock();
  image1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image1_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "negtive_rating"
  negtive_ratingClock = new util.Clock();
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9], fontSize: 0.02, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: undefined, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '您现在感受到多大程度的消极情绪？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '1分表示非常积极，9分表示非常消极\n\n请按对应  数字键  进行回答',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.15)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "enough_begin"
  enough_beginClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '练习试次结束\n\n按  “空格键”  进入正式实验\n\n记得关注自己的情绪状态哦',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "condition1_picture1"
  condition1_picture1Clock = new util.Clock();
  image6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image6', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "condition1_picture2"
  condition1_picture2Clock = new util.Clock();
  image6_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image6_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "rest"
  restClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '上一阶段的实验已经结束，您可以稍作休息\n\n休息好了 可按  “空格键”  进入第二阶段的实验',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "limit_intro"
  limit_introClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: '第二阶段实验流程与第一阶段相同\n不过，接下来您需要在3秒钟内选定调节策略\n\n按  “空格键”  进入练习试次',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac2_picture1"
  prac2_picture1Clock = new util.Clock();
  image7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image7', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "adjust_limit"
  adjust_limitClock = new util.Clock();
  time = new visual.TextStim({
    win: psychoJS.window,
    name: 'time',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.8], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: '请选择您想使用的情绪调节策略：\n\n重新理解情境  按 “F” 键\n\n转移注意力 按 “J” 键 \n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac2_picture2"
  prac2_picture2Clock = new util.Clock();
  image7_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image7_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "limit_begin"
  limit_beginClock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '练习试次结束\n\n按  “空格键”  进入正式实验\n\n记得关注自己的情绪状态哦',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "condition2_picture1"
  condition2_picture1Clock = new util.Clock();
  image8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image8', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "condition2_picture2"
  condition2_picture2Clock = new util.Clock();
  image8_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image8_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: '实验结束\n\n感谢您的参与！',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var begin1MaxDurationReached;
var _key_resp_allKeys;
var begin1MaxDuration;
var begin1Components;
function begin1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'begin1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    begin1Clock.reset();
    routineTimer.reset();
    begin1MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('begin1.started', globalClock.getTime());
    begin1MaxDuration = null
    // keep track of which components have finished
    begin1Components = [];
    begin1Components.push(text);
    begin1Components.push(key_resp);
    
    begin1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function begin1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'begin1' ---
    // get current time
    t = begin1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    begin1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function begin1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'begin1' ---
    begin1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('begin1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "begin1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var introMaxDurationReached;
var _key_resp_2_allKeys;
var introMaxDuration;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    introClock.reset();
    routineTimer.reset();
    introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('intro.started', globalClock.getTime());
    introMaxDuration = null
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(text_2);
    introComponents.push(key_resp_2);
    
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var highCSC_introMaxDurationReached;
var _key_resp_6_allKeys;
var highCSC_introMaxDuration;
var highCSC_introComponents;
function highCSC_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'highCSC_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    highCSC_introClock.reset();
    routineTimer.reset();
    highCSC_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    psychoJS.experiment.addData('highCSC_intro.started', globalClock.getTime());
    highCSC_introMaxDuration = null
    // keep track of which components have finished
    highCSC_introComponents = [];
    highCSC_introComponents.push(text_6);
    highCSC_introComponents.push(key_resp_6);
    
    highCSC_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function highCSC_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'highCSC_intro' ---
    // get current time
    t = highCSC_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    
    // if text_6 is active this frame...
    if (text_6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    // if key_resp_6 is active this frame...
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    highCSC_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function highCSC_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'highCSC_intro' ---
    highCSC_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('highCSC_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "highCSC_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac1_loop;
function prac1_loopLoopBegin(prac1_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac1_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'prac1.xlsx',
      seed: undefined, name: 'prac1_loop'
    });
    psychoJS.experiment.addLoop(prac1_loop); // add the loop to the experiment
    currentLoop = prac1_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    prac1_loop.forEach(function() {
      snapshot = prac1_loop.getSnapshot();
    
      prac1_loopLoopScheduler.add(importConditions(snapshot));
      prac1_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
      prac1_loopLoopScheduler.add(ITIRoutineEachFrame());
      prac1_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
      prac1_loopLoopScheduler.add(prac1_picture1RoutineBegin(snapshot));
      prac1_loopLoopScheduler.add(prac1_picture1RoutineEachFrame());
      prac1_loopLoopScheduler.add(prac1_picture1RoutineEnd(snapshot));
      prac1_loopLoopScheduler.add(adjust_enoughRoutineBegin(snapshot));
      prac1_loopLoopScheduler.add(adjust_enoughRoutineEachFrame());
      prac1_loopLoopScheduler.add(adjust_enoughRoutineEnd(snapshot));
      prac1_loopLoopScheduler.add(prac1_picture2RoutineBegin(snapshot));
      prac1_loopLoopScheduler.add(prac1_picture2RoutineEachFrame());
      prac1_loopLoopScheduler.add(prac1_picture2RoutineEnd(snapshot));
      prac1_loopLoopScheduler.add(negtive_ratingRoutineBegin(snapshot));
      prac1_loopLoopScheduler.add(negtive_ratingRoutineEachFrame());
      prac1_loopLoopScheduler.add(negtive_ratingRoutineEnd(snapshot));
      prac1_loopLoopScheduler.add(prac1_loopLoopEndIteration(prac1_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function prac1_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac1_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac1_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var condition1_loop;
function condition1_loopLoopBegin(condition1_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    condition1_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'image1.xlsx',
      seed: undefined, name: 'condition1_loop'
    });
    psychoJS.experiment.addLoop(condition1_loop); // add the loop to the experiment
    currentLoop = condition1_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    condition1_loop.forEach(function() {
      snapshot = condition1_loop.getSnapshot();
    
      condition1_loopLoopScheduler.add(importConditions(snapshot));
      condition1_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
      condition1_loopLoopScheduler.add(ITIRoutineEachFrame());
      condition1_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
      condition1_loopLoopScheduler.add(condition1_picture1RoutineBegin(snapshot));
      condition1_loopLoopScheduler.add(condition1_picture1RoutineEachFrame());
      condition1_loopLoopScheduler.add(condition1_picture1RoutineEnd(snapshot));
      condition1_loopLoopScheduler.add(adjust_enoughRoutineBegin(snapshot));
      condition1_loopLoopScheduler.add(adjust_enoughRoutineEachFrame());
      condition1_loopLoopScheduler.add(adjust_enoughRoutineEnd(snapshot));
      condition1_loopLoopScheduler.add(condition1_picture2RoutineBegin(snapshot));
      condition1_loopLoopScheduler.add(condition1_picture2RoutineEachFrame());
      condition1_loopLoopScheduler.add(condition1_picture2RoutineEnd(snapshot));
      condition1_loopLoopScheduler.add(negtive_ratingRoutineBegin(snapshot));
      condition1_loopLoopScheduler.add(negtive_ratingRoutineEachFrame());
      condition1_loopLoopScheduler.add(negtive_ratingRoutineEnd(snapshot));
      condition1_loopLoopScheduler.add(condition1_loopLoopEndIteration(condition1_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function condition1_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(condition1_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function condition1_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var prac2_loop;
function prac2_loopLoopBegin(prac2_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac2_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'prac2.xlsx',
      seed: undefined, name: 'prac2_loop'
    });
    psychoJS.experiment.addLoop(prac2_loop); // add the loop to the experiment
    currentLoop = prac2_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    prac2_loop.forEach(function() {
      snapshot = prac2_loop.getSnapshot();
    
      prac2_loopLoopScheduler.add(importConditions(snapshot));
      prac2_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
      prac2_loopLoopScheduler.add(ITIRoutineEachFrame());
      prac2_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
      prac2_loopLoopScheduler.add(prac2_picture1RoutineBegin(snapshot));
      prac2_loopLoopScheduler.add(prac2_picture1RoutineEachFrame());
      prac2_loopLoopScheduler.add(prac2_picture1RoutineEnd(snapshot));
      prac2_loopLoopScheduler.add(adjust_limitRoutineBegin(snapshot));
      prac2_loopLoopScheduler.add(adjust_limitRoutineEachFrame());
      prac2_loopLoopScheduler.add(adjust_limitRoutineEnd(snapshot));
      prac2_loopLoopScheduler.add(prac2_picture2RoutineBegin(snapshot));
      prac2_loopLoopScheduler.add(prac2_picture2RoutineEachFrame());
      prac2_loopLoopScheduler.add(prac2_picture2RoutineEnd(snapshot));
      prac2_loopLoopScheduler.add(negtive_ratingRoutineBegin(snapshot));
      prac2_loopLoopScheduler.add(negtive_ratingRoutineEachFrame());
      prac2_loopLoopScheduler.add(negtive_ratingRoutineEnd(snapshot));
      prac2_loopLoopScheduler.add(prac2_loopLoopEndIteration(prac2_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function prac2_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac2_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac2_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var condition2;
function condition2LoopBegin(condition2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    condition2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'image2.xlsx',
      seed: undefined, name: 'condition2'
    });
    psychoJS.experiment.addLoop(condition2); // add the loop to the experiment
    currentLoop = condition2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    condition2.forEach(function() {
      snapshot = condition2.getSnapshot();
    
      condition2LoopScheduler.add(importConditions(snapshot));
      condition2LoopScheduler.add(ITIRoutineBegin(snapshot));
      condition2LoopScheduler.add(ITIRoutineEachFrame());
      condition2LoopScheduler.add(ITIRoutineEnd(snapshot));
      condition2LoopScheduler.add(condition2_picture1RoutineBegin(snapshot));
      condition2LoopScheduler.add(condition2_picture1RoutineEachFrame());
      condition2LoopScheduler.add(condition2_picture1RoutineEnd(snapshot));
      condition2LoopScheduler.add(adjust_limitRoutineBegin(snapshot));
      condition2LoopScheduler.add(adjust_limitRoutineEachFrame());
      condition2LoopScheduler.add(adjust_limitRoutineEnd(snapshot));
      condition2LoopScheduler.add(condition2_picture2RoutineBegin(snapshot));
      condition2LoopScheduler.add(condition2_picture2RoutineEachFrame());
      condition2LoopScheduler.add(condition2_picture2RoutineEnd(snapshot));
      condition2LoopScheduler.add(negtive_ratingRoutineBegin(snapshot));
      condition2LoopScheduler.add(negtive_ratingRoutineEachFrame());
      condition2LoopScheduler.add(negtive_ratingRoutineEnd(snapshot));
      condition2LoopScheduler.add(condition2LoopEndIteration(condition2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function condition2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(condition2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function condition2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var ITIMaxDurationReached;
var ITIMaxDuration;
var ITIComponents;
function ITIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ITI' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ITIClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    ITIMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('ITI.started', globalClock.getTime());
    ITIMaxDuration = null
    // keep track of which components have finished
    ITIComponents = [];
    ITIComponents.push(polygon);
    
    ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function ITIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ITI' ---
    // get current time
    t = ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    
    // if polygon is active this frame...
    if (polygon.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      polygon.tStop = t;  // not accounting for scr refresh
      polygon.frameNStop = frameN;  // exact frame index
      // update status
      polygon.status = PsychoJS.Status.FINISHED;
      polygon.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ITI' ---
    ITIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ITI.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (ITIMaxDurationReached) {
        ITIClock.add(ITIMaxDuration);
    } else {
        ITIClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac1_picture1MaxDurationReached;
var prac1_picture1MaxDuration;
var prac1_picture1Components;
function prac1_picture1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac1_picture1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    prac1_picture1Clock.reset(routineTimer.getTime());
    routineTimer.add(0.800000);
    prac1_picture1MaxDurationReached = false;
    // update component parameters for each repeat
    image1.setImage(image);
    psychoJS.experiment.addData('prac1_picture1.started', globalClock.getTime());
    prac1_picture1MaxDuration = null
    // keep track of which components have finished
    prac1_picture1Components = [];
    prac1_picture1Components.push(image1);
    
    prac1_picture1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function prac1_picture1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac1_picture1' ---
    // get current time
    t = prac1_picture1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image1* updates
    if (t >= 0.0 && image1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image1.tStart = t;  // (not accounting for frame time here)
      image1.frameNStart = frameN;  // exact frame index
      
      image1.setAutoDraw(true);
    }
    
    
    // if image1 is active this frame...
    if (image1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image1.tStop = t;  // not accounting for scr refresh
      image1.frameNStop = frameN;  // exact frame index
      // update status
      image1.status = PsychoJS.Status.FINISHED;
      image1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    prac1_picture1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac1_picture1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac1_picture1' ---
    prac1_picture1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('prac1_picture1.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (prac1_picture1MaxDurationReached) {
        prac1_picture1Clock.add(prac1_picture1MaxDuration);
    } else {
        prac1_picture1Clock.add(0.800000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var adjust_enoughMaxDurationReached;
var _key_resp_3_allKeys;
var adjust_enoughMaxDuration;
var adjust_enoughComponents;
function adjust_enoughRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'adjust_enough' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    adjust_enoughClock.reset();
    routineTimer.reset();
    adjust_enoughMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('adjust_enough.started', globalClock.getTime());
    adjust_enoughMaxDuration = null
    // keep track of which components have finished
    adjust_enoughComponents = [];
    adjust_enoughComponents.push(text_3);
    adjust_enoughComponents.push(key_resp_3);
    
    adjust_enoughComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function adjust_enoughRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'adjust_enough' ---
    // get current time
    t = adjust_enoughClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // if text_3 is active this frame...
    if (text_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_3* updates
    if (t >= 0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    // if key_resp_3 is active this frame...
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({
        keyList: typeof ['f','j'] === 'string' ? [['f','j']] : ['f','j'], 
        waitRelease: false
      });
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    adjust_enoughComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function adjust_enoughRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'adjust_enough' ---
    adjust_enoughComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('adjust_enough.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "adjust_enough" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac1_picture2MaxDurationReached;
var prac1_picture2MaxDuration;
var prac1_picture2Components;
function prac1_picture2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac1_picture2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    prac1_picture2Clock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    prac1_picture2MaxDurationReached = false;
    // update component parameters for each repeat
    image1_2.setImage(image);
    psychoJS.experiment.addData('prac1_picture2.started', globalClock.getTime());
    prac1_picture2MaxDuration = null
    // keep track of which components have finished
    prac1_picture2Components = [];
    prac1_picture2Components.push(image1_2);
    
    prac1_picture2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function prac1_picture2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac1_picture2' ---
    // get current time
    t = prac1_picture2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image1_2* updates
    if (t >= 0.0 && image1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image1_2.tStart = t;  // (not accounting for frame time here)
      image1_2.frameNStart = frameN;  // exact frame index
      
      image1_2.setAutoDraw(true);
    }
    
    
    // if image1_2 is active this frame...
    if (image1_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image1_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image1_2.tStop = t;  // not accounting for scr refresh
      image1_2.frameNStop = frameN;  // exact frame index
      // update status
      image1_2.status = PsychoJS.Status.FINISHED;
      image1_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    prac1_picture2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac1_picture2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac1_picture2' ---
    prac1_picture2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('prac1_picture2.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (prac1_picture2MaxDurationReached) {
        prac1_picture2Clock.add(prac1_picture2MaxDuration);
    } else {
        prac1_picture2Clock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var negtive_ratingMaxDurationReached;
var _key_resp_4_allKeys;
var negtive_ratingMaxDuration;
var negtive_ratingComponents;
function negtive_ratingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'negtive_rating' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    negtive_ratingClock.reset();
    routineTimer.reset();
    negtive_ratingMaxDurationReached = false;
    // update component parameters for each repeat
    slider.reset()
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('negtive_rating.started', globalClock.getTime());
    negtive_ratingMaxDuration = null
    // keep track of which components have finished
    negtive_ratingComponents = [];
    negtive_ratingComponents.push(slider);
    negtive_ratingComponents.push(key_resp_4);
    negtive_ratingComponents.push(text_4);
    negtive_ratingComponents.push(text_5);
    
    negtive_ratingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function negtive_ratingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'negtive_rating' ---
    // get current time
    t = negtive_ratingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }
    
    
    // if slider is active this frame...
    if (slider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    // if key_resp_4 is active this frame...
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({
        keyList: typeof ['1','2','3','4','5','6','7','8','9'] === 'string' ? [['1','2','3','4','5','6','7','8','9']] : ['1','2','3','4','5','6','7','8','9'], 
        waitRelease: false
      });
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // if text_4 is active this frame...
    if (text_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // if text_5 is active this frame...
    if (text_5.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    negtive_ratingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function negtive_ratingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'negtive_rating' ---
    negtive_ratingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('negtive_rating.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "negtive_rating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var enough_beginMaxDurationReached;
var _key_resp_5_allKeys;
var enough_beginMaxDuration;
var enough_beginComponents;
function enough_beginRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'enough_begin' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    enough_beginClock.reset();
    routineTimer.reset();
    enough_beginMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('enough_begin.started', globalClock.getTime());
    enough_beginMaxDuration = null
    // keep track of which components have finished
    enough_beginComponents = [];
    enough_beginComponents.push(text_7);
    enough_beginComponents.push(key_resp_5);
    
    enough_beginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function enough_beginRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'enough_begin' ---
    // get current time
    t = enough_beginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    
    // if text_7 is active this frame...
    if (text_7.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    // if key_resp_5 is active this frame...
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    enough_beginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function enough_beginRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'enough_begin' ---
    enough_beginComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('enough_begin.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "enough_begin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var condition1_picture1MaxDurationReached;
var condition1_picture1MaxDuration;
var condition1_picture1Components;
function condition1_picture1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'condition1_picture1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    condition1_picture1Clock.reset(routineTimer.getTime());
    routineTimer.add(0.800000);
    condition1_picture1MaxDurationReached = false;
    // update component parameters for each repeat
    image6.setImage(image);
    psychoJS.experiment.addData('condition1_picture1.started', globalClock.getTime());
    condition1_picture1MaxDuration = null
    // keep track of which components have finished
    condition1_picture1Components = [];
    condition1_picture1Components.push(image6);
    
    condition1_picture1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function condition1_picture1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'condition1_picture1' ---
    // get current time
    t = condition1_picture1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image6* updates
    if (t >= 0.0 && image6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image6.tStart = t;  // (not accounting for frame time here)
      image6.frameNStart = frameN;  // exact frame index
      
      image6.setAutoDraw(true);
    }
    
    
    // if image6 is active this frame...
    if (image6.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image6.tStop = t;  // not accounting for scr refresh
      image6.frameNStop = frameN;  // exact frame index
      // update status
      image6.status = PsychoJS.Status.FINISHED;
      image6.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    condition1_picture1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function condition1_picture1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'condition1_picture1' ---
    condition1_picture1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('condition1_picture1.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (condition1_picture1MaxDurationReached) {
        condition1_picture1Clock.add(condition1_picture1MaxDuration);
    } else {
        condition1_picture1Clock.add(0.800000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var condition1_picture2MaxDurationReached;
var condition1_picture2MaxDuration;
var condition1_picture2Components;
function condition1_picture2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'condition1_picture2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    condition1_picture2Clock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    condition1_picture2MaxDurationReached = false;
    // update component parameters for each repeat
    image6_2.setImage(image);
    psychoJS.experiment.addData('condition1_picture2.started', globalClock.getTime());
    condition1_picture2MaxDuration = null
    // keep track of which components have finished
    condition1_picture2Components = [];
    condition1_picture2Components.push(image6_2);
    
    condition1_picture2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function condition1_picture2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'condition1_picture2' ---
    // get current time
    t = condition1_picture2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image6_2* updates
    if (t >= 0.0 && image6_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image6_2.tStart = t;  // (not accounting for frame time here)
      image6_2.frameNStart = frameN;  // exact frame index
      
      image6_2.setAutoDraw(true);
    }
    
    
    // if image6_2 is active this frame...
    if (image6_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image6_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image6_2.tStop = t;  // not accounting for scr refresh
      image6_2.frameNStop = frameN;  // exact frame index
      // update status
      image6_2.status = PsychoJS.Status.FINISHED;
      image6_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    condition1_picture2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function condition1_picture2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'condition1_picture2' ---
    condition1_picture2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('condition1_picture2.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (condition1_picture2MaxDurationReached) {
        condition1_picture2Clock.add(condition1_picture2MaxDuration);
    } else {
        condition1_picture2Clock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var restMaxDurationReached;
var _key_resp_7_allKeys;
var restMaxDuration;
var restComponents;
function restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    restClock.reset();
    routineTimer.reset();
    restMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    psychoJS.experiment.addData('rest.started', globalClock.getTime());
    restMaxDuration = null
    // keep track of which components have finished
    restComponents = [];
    restComponents.push(text_8);
    restComponents.push(key_resp_7);
    
    restComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function restRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rest' ---
    // get current time
    t = restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    
    // if text_8 is active this frame...
    if (text_8.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    // if key_resp_7 is active this frame...
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    restComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rest' ---
    restComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('rest.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var limit_introMaxDurationReached;
var _key_resp_8_allKeys;
var limit_introMaxDuration;
var limit_introComponents;
function limit_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'limit_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    limit_introClock.reset();
    routineTimer.reset();
    limit_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    psychoJS.experiment.addData('limit_intro.started', globalClock.getTime());
    limit_introMaxDuration = null
    // keep track of which components have finished
    limit_introComponents = [];
    limit_introComponents.push(text_9);
    limit_introComponents.push(key_resp_8);
    
    limit_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function limit_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'limit_intro' ---
    // get current time
    t = limit_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    
    // if text_9 is active this frame...
    if (text_9.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }
    
    // if key_resp_8 is active this frame...
    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    limit_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function limit_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'limit_intro' ---
    limit_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('limit_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "limit_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac2_picture1MaxDurationReached;
var prac2_picture1MaxDuration;
var prac2_picture1Components;
function prac2_picture1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac2_picture1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    prac2_picture1Clock.reset(routineTimer.getTime());
    routineTimer.add(0.800000);
    prac2_picture1MaxDurationReached = false;
    // update component parameters for each repeat
    image7.setImage(image);
    psychoJS.experiment.addData('prac2_picture1.started', globalClock.getTime());
    prac2_picture1MaxDuration = null
    // keep track of which components have finished
    prac2_picture1Components = [];
    prac2_picture1Components.push(image7);
    
    prac2_picture1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function prac2_picture1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac2_picture1' ---
    // get current time
    t = prac2_picture1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image7* updates
    if (t >= 0.0 && image7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image7.tStart = t;  // (not accounting for frame time here)
      image7.frameNStart = frameN;  // exact frame index
      
      image7.setAutoDraw(true);
    }
    
    
    // if image7 is active this frame...
    if (image7.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image7.tStop = t;  // not accounting for scr refresh
      image7.frameNStop = frameN;  // exact frame index
      // update status
      image7.status = PsychoJS.Status.FINISHED;
      image7.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    prac2_picture1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac2_picture1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac2_picture1' ---
    prac2_picture1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('prac2_picture1.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (prac2_picture1MaxDurationReached) {
        prac2_picture1Clock.add(prac2_picture1MaxDuration);
    } else {
        prac2_picture1Clock.add(0.800000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var adjust_limitMaxDurationReached;
var _key_resp_9_allKeys;
var adjust_limitMaxDuration;
var adjust_limitComponents;
function adjust_limitRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'adjust_limit' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    adjust_limitClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    adjust_limitMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    psychoJS.experiment.addData('adjust_limit.started', globalClock.getTime());
    adjust_limitMaxDuration = null
    // keep track of which components have finished
    adjust_limitComponents = [];
    adjust_limitComponents.push(time);
    adjust_limitComponents.push(text_11);
    adjust_limitComponents.push(key_resp_9);
    
    adjust_limitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function adjust_limitRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'adjust_limit' ---
    // get current time
    t = adjust_limitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *time* updates
    if (t >= 0.0 && time.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      time.setText(util.round((3 - t), 1), false);
      // keep track of start time/frame for later
      time.tStart = t;  // (not accounting for frame time here)
      time.frameNStart = frameN;  // exact frame index
      
      time.setAutoDraw(true);
    }
    
    
    // if time is active this frame...
    if (time.status === PsychoJS.Status.STARTED) {
      // update params
      time.setText(util.round((3 - t), 1), false);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (time.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      time.tStop = t;  // not accounting for scr refresh
      time.frameNStop = frameN;  // exact frame index
      // update status
      time.status = PsychoJS.Status.FINISHED;
      time.setAutoDraw(false);
    }
    
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    
    // if text_11 is active this frame...
    if (text_11.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_11.tStop = t;  // not accounting for scr refresh
      text_11.frameNStop = frameN;  // exact frame index
      // update status
      text_11.status = PsychoJS.Status.FINISHED;
      text_11.setAutoDraw(false);
    }
    
    
    // *key_resp_9* updates
    if (t >= 0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }
    frameRemains = 0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp_9.tStop = t;  // not accounting for scr refresh
      key_resp_9.frameNStop = frameN;  // exact frame index
      // update status
      key_resp_9.status = PsychoJS.Status.FINISHED;
      frameRemains = 0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_9.tStop = t;  // not accounting for scr refresh
        key_resp_9.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_9.status = PsychoJS.Status.FINISHED;
        key_resp_9.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp_9 is active this frame...
      if (key_resp_9.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_9.getKeys({
          keyList: typeof ['f','j'] === 'string' ? [['f','j']] : ['f','j'], 
          waitRelease: false
        });
        _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
        if (_key_resp_9_allKeys.length > 0) {
          key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
          key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
          key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      adjust_limitComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function adjust_limitRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'adjust_limit' ---
      adjust_limitComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('adjust_limit.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_9.corr, level);
      }
      psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
      if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
          psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
          routineTimer.reset();
          }
      
      key_resp_9.stop();
      if (routineForceEnded) {
          routineTimer.reset();} else if (adjust_limitMaxDurationReached) {
          adjust_limitClock.add(adjust_limitMaxDuration);
      } else {
          adjust_limitClock.add(3.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var prac2_picture2MaxDurationReached;
var prac2_picture2MaxDuration;
var prac2_picture2Components;
function prac2_picture2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'prac2_picture2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      prac2_picture2Clock.reset(routineTimer.getTime());
      routineTimer.add(5.000000);
      prac2_picture2MaxDurationReached = false;
      // update component parameters for each repeat
      image7_2.setImage(image);
      psychoJS.experiment.addData('prac2_picture2.started', globalClock.getTime());
      prac2_picture2MaxDuration = null
      // keep track of which components have finished
      prac2_picture2Components = [];
      prac2_picture2Components.push(image7_2);
      
      prac2_picture2Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function prac2_picture2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'prac2_picture2' ---
      // get current time
      t = prac2_picture2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *image7_2* updates
      if (t >= 0.0 && image7_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image7_2.tStart = t;  // (not accounting for frame time here)
        image7_2.frameNStart = frameN;  // exact frame index
        
        image7_2.setAutoDraw(true);
      }
      
      
      // if image7_2 is active this frame...
      if (image7_2.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (image7_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        image7_2.tStop = t;  // not accounting for scr refresh
        image7_2.frameNStop = frameN;  // exact frame index
        // update status
        image7_2.status = PsychoJS.Status.FINISHED;
        image7_2.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      prac2_picture2Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function prac2_picture2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'prac2_picture2' ---
      prac2_picture2Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('prac2_picture2.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (prac2_picture2MaxDurationReached) {
          prac2_picture2Clock.add(prac2_picture2MaxDuration);
      } else {
          prac2_picture2Clock.add(5.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var limit_beginMaxDurationReached;
var _key_resp_10_allKeys;
var limit_beginMaxDuration;
var limit_beginComponents;
function limit_beginRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'limit_begin' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      limit_beginClock.reset();
      routineTimer.reset();
      limit_beginMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_10.keys = undefined;
      key_resp_10.rt = undefined;
      _key_resp_10_allKeys = [];
      psychoJS.experiment.addData('limit_begin.started', globalClock.getTime());
      limit_beginMaxDuration = null
      // keep track of which components have finished
      limit_beginComponents = [];
      limit_beginComponents.push(text_10);
      limit_beginComponents.push(key_resp_10);
      
      limit_beginComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function limit_beginRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'limit_begin' ---
      // get current time
      t = limit_beginClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_10* updates
      if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_10.tStart = t;  // (not accounting for frame time here)
        text_10.frameNStart = frameN;  // exact frame index
        
        text_10.setAutoDraw(true);
      }
      
      
      // if text_10 is active this frame...
      if (text_10.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_10* updates
      if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_10.tStart = t;  // (not accounting for frame time here)
        key_resp_10.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
      }
      
      // if key_resp_10 is active this frame...
      if (key_resp_10.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_10.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
        if (_key_resp_10_allKeys.length > 0) {
          key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
          key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
          key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      limit_beginComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function limit_beginRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'limit_begin' ---
      limit_beginComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('limit_begin.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_10.corr, level);
      }
      psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
      if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
          psychoJS.experiment.addData('key_resp_10.duration', key_resp_10.duration);
          routineTimer.reset();
          }
      
      key_resp_10.stop();
      // the Routine "limit_begin" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var condition2_picture1MaxDurationReached;
var condition2_picture1MaxDuration;
var condition2_picture1Components;
function condition2_picture1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'condition2_picture1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      condition2_picture1Clock.reset(routineTimer.getTime());
      routineTimer.add(0.800000);
      condition2_picture1MaxDurationReached = false;
      // update component parameters for each repeat
      image8.setImage(image);
      psychoJS.experiment.addData('condition2_picture1.started', globalClock.getTime());
      condition2_picture1MaxDuration = null
      // keep track of which components have finished
      condition2_picture1Components = [];
      condition2_picture1Components.push(image8);
      
      condition2_picture1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function condition2_picture1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'condition2_picture1' ---
      // get current time
      t = condition2_picture1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *image8* updates
      if (t >= 0.0 && image8.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image8.tStart = t;  // (not accounting for frame time here)
        image8.frameNStart = frameN;  // exact frame index
        
        image8.setAutoDraw(true);
      }
      
      
      // if image8 is active this frame...
      if (image8.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (image8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        image8.tStop = t;  // not accounting for scr refresh
        image8.frameNStop = frameN;  // exact frame index
        // update status
        image8.status = PsychoJS.Status.FINISHED;
        image8.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      condition2_picture1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function condition2_picture1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'condition2_picture1' ---
      condition2_picture1Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('condition2_picture1.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (condition2_picture1MaxDurationReached) {
          condition2_picture1Clock.add(condition2_picture1MaxDuration);
      } else {
          condition2_picture1Clock.add(0.800000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var condition2_picture2MaxDurationReached;
var condition2_picture2MaxDuration;
var condition2_picture2Components;
function condition2_picture2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'condition2_picture2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      condition2_picture2Clock.reset(routineTimer.getTime());
      routineTimer.add(5.000000);
      condition2_picture2MaxDurationReached = false;
      // update component parameters for each repeat
      image8_2.setImage(image);
      psychoJS.experiment.addData('condition2_picture2.started', globalClock.getTime());
      condition2_picture2MaxDuration = null
      // keep track of which components have finished
      condition2_picture2Components = [];
      condition2_picture2Components.push(image8_2);
      
      condition2_picture2Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function condition2_picture2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'condition2_picture2' ---
      // get current time
      t = condition2_picture2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *image8_2* updates
      if (t >= 0.0 && image8_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image8_2.tStart = t;  // (not accounting for frame time here)
        image8_2.frameNStart = frameN;  // exact frame index
        
        image8_2.setAutoDraw(true);
      }
      
      
      // if image8_2 is active this frame...
      if (image8_2.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (image8_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        image8_2.tStop = t;  // not accounting for scr refresh
        image8_2.frameNStop = frameN;  // exact frame index
        // update status
        image8_2.status = PsychoJS.Status.FINISHED;
        image8_2.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      condition2_picture2Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function condition2_picture2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'condition2_picture2' ---
      condition2_picture2Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('condition2_picture2.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (condition2_picture2MaxDurationReached) {
          condition2_picture2Clock.add(condition2_picture2MaxDuration);
      } else {
          condition2_picture2Clock.add(5.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'end' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      endClock.reset(routineTimer.getTime());
      routineTimer.add(3.000000);
      endMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('end.started', globalClock.getTime());
      endMaxDuration = null
      // keep track of which components have finished
      endComponents = [];
      endComponents.push(text_12);
      
      endComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function endRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'end' ---
      // get current time
      t = endClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_12* updates
      if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_12.tStart = t;  // (not accounting for frame time here)
        text_12.frameNStart = frameN;  // exact frame index
        
        text_12.setAutoDraw(true);
      }
      
      
      // if text_12 is active this frame...
      if (text_12.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_12.tStop = t;  // not accounting for scr refresh
        text_12.frameNStop = frameN;  // exact frame index
        // update status
        text_12.status = PsychoJS.Status.FINISHED;
        text_12.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      endComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function endRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'end' ---
      endComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('end.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (endMaxDurationReached) {
          endClock.add(endMaxDuration);
      } else {
          endClock.add(3.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }
