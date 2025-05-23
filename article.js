/**************** 
 * Article *
 ****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'article';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
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
flowScheduler.add(beforeplaygameRoutineBegin());
flowScheduler.add(beforeplaygameRoutineEachFrame());
flowScheduler.add(beforeplaygameRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'question_stim.xlsx', 'path': 'question_stim.xlsx'},
    {'name': 'image/number1.png', 'path': 'image/number1.png'},
    {'name': 'image/number2.png', 'path': 'image/number2.png'},
    {'name': 'image/number3.png', 'path': 'image/number3.png'},
    {'name': 'image/number4.png', 'path': 'image/number4.png'},
    {'name': 'image/number5.png', 'path': 'image/number5.png'},
    {'name': 'image/number6.png', 'path': 'image/number6.png'},
    {'name': 'image/number7.png', 'path': 'image/number7.png'},
    {'name': 'image/number8.png', 'path': 'image/number8.png'},
    {'name': 'image/number9.png', 'path': 'image/number9.png'},
    {'name': 'image/number10.png', 'path': 'image/number10.png'},
    {'name': 'image/kumnum.png', 'path': 'image/kumnum.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'image/Screenshot (172).png', 'path': 'image/Screenshot (172).png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.5';
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


var beforeplaygameClock;
var imagefirst;
var keyskip2;
var articleClock;
var imagequestion;
var keyanswer;
var blankClock;
var imageblank;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "beforeplaygame"
  beforeplaygameClock = new util.Clock();
  imagefirst = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imagefirst', units : undefined, 
    image : 'image/kumnum.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.78, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  keyskip2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "article"
  articleClock = new util.Clock();
  imagequestion = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imagequestion', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.78, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  keyanswer = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blank"
  blankClock = new util.Clock();
  imageblank = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imageblank', units : undefined, 
    image : 'image/Screenshot (172).png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.78, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var beforeplaygameMaxDurationReached;
var _keyskip2_allKeys;
var beforeplaygameMaxDuration;
var beforeplaygameComponents;
function beforeplaygameRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'beforeplaygame' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    beforeplaygameClock.reset();
    routineTimer.reset();
    beforeplaygameMaxDurationReached = false;
    // update component parameters for each repeat
    keyskip2.keys = undefined;
    keyskip2.rt = undefined;
    _keyskip2_allKeys = [];
    psychoJS.experiment.addData('beforeplaygame.started', globalClock.getTime());
    beforeplaygameMaxDuration = null
    // keep track of which components have finished
    beforeplaygameComponents = [];
    beforeplaygameComponents.push(imagefirst);
    beforeplaygameComponents.push(keyskip2);
    
    for (const thisComponent of beforeplaygameComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function beforeplaygameRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'beforeplaygame' ---
    // get current time
    t = beforeplaygameClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *imagefirst* updates
    if (t >= 0.0 && imagefirst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imagefirst.tStart = t;  // (not accounting for frame time here)
      imagefirst.frameNStart = frameN;  // exact frame index
      
      imagefirst.setAutoDraw(true);
    }
    
    
    // *keyskip2* updates
    if (t >= 0.0 && keyskip2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyskip2.tStart = t;  // (not accounting for frame time here)
      keyskip2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyskip2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyskip2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyskip2.clearEvents(); });
    }
    
    if (keyskip2.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyskip2.getKeys({keyList: ['space'], waitRelease: false});
      _keyskip2_allKeys = _keyskip2_allKeys.concat(theseKeys);
      if (_keyskip2_allKeys.length > 0) {
        keyskip2.keys = _keyskip2_allKeys[_keyskip2_allKeys.length - 1].name;  // just the last key pressed
        keyskip2.rt = _keyskip2_allKeys[_keyskip2_allKeys.length - 1].rt;
        keyskip2.duration = _keyskip2_allKeys[_keyskip2_allKeys.length - 1].duration;
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
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of beforeplaygameComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beforeplaygameRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'beforeplaygame' ---
    for (const thisComponent of beforeplaygameComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('beforeplaygame.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyskip2.corr, level);
    }
    psychoJS.experiment.addData('keyskip2.keys', keyskip2.keys);
    if (typeof keyskip2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyskip2.rt', keyskip2.rt);
        psychoJS.experiment.addData('keyskip2.duration', keyskip2.duration);
        routineTimer.reset();
        }
    
    keyskip2.stop();
    // the Routine "beforeplaygame" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'question_stim.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(articleRoutineBegin(snapshot));
      trialsLoopScheduler.add(articleRoutineEachFrame());
      trialsLoopScheduler.add(articleRoutineEnd(snapshot));
      trialsLoopScheduler.add(blankRoutineBegin(snapshot));
      trialsLoopScheduler.add(blankRoutineEachFrame());
      trialsLoopScheduler.add(blankRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
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


var articleMaxDurationReached;
var _keyanswer_allKeys;
var articleMaxDuration;
var articleComponents;
function articleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'article' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    articleClock.reset();
    routineTimer.reset();
    articleMaxDurationReached = false;
    // update component parameters for each repeat
    imagequestion.setImage(article_image);
    keyanswer.keys = undefined;
    keyanswer.rt = undefined;
    _keyanswer_allKeys = [];
    psychoJS.experiment.addData('article.started', globalClock.getTime());
    articleMaxDuration = null
    // keep track of which components have finished
    articleComponents = [];
    articleComponents.push(imagequestion);
    articleComponents.push(keyanswer);
    
    for (const thisComponent of articleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function articleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'article' ---
    // get current time
    t = articleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *imagequestion* updates
    if (t >= 0.0 && imagequestion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imagequestion.tStart = t;  // (not accounting for frame time here)
      imagequestion.frameNStart = frameN;  // exact frame index
      
      imagequestion.setAutoDraw(true);
    }
    
    
    // *keyanswer* updates
    if (t >= 0.0 && keyanswer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyanswer.tStart = t;  // (not accounting for frame time here)
      keyanswer.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyanswer.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyanswer.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyanswer.clearEvents(); });
    }
    
    if (keyanswer.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyanswer.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _keyanswer_allKeys = _keyanswer_allKeys.concat(theseKeys);
      if (_keyanswer_allKeys.length > 0) {
        keyanswer.keys = _keyanswer_allKeys[_keyanswer_allKeys.length - 1].name;  // just the last key pressed
        keyanswer.rt = _keyanswer_allKeys[_keyanswer_allKeys.length - 1].rt;
        keyanswer.duration = _keyanswer_allKeys[_keyanswer_allKeys.length - 1].duration;
        // was this correct?
        if (keyanswer.keys == check_key) {
            keyanswer.corr = 1;
        } else {
            keyanswer.corr = 0;
        }
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
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of articleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function articleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'article' ---
    for (const thisComponent of articleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('article.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (keyanswer.keys === undefined) {
      if (['None','none',undefined].includes(check_key)) {
         keyanswer.corr = 1;  // correct non-response
      } else {
         keyanswer.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyanswer.corr, level);
    }
    psychoJS.experiment.addData('keyanswer.keys', keyanswer.keys);
    psychoJS.experiment.addData('keyanswer.corr', keyanswer.corr);
    if (typeof keyanswer.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyanswer.rt', keyanswer.rt);
        psychoJS.experiment.addData('keyanswer.duration', keyanswer.duration);
        routineTimer.reset();
        }
    
    keyanswer.stop();
    // the Routine "article" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blankMaxDurationReached;
var blankMaxDuration;
var blankComponents;
function blankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    blankClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    blankMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank.started', globalClock.getTime());
    blankMaxDuration = null
    // keep track of which components have finished
    blankComponents = [];
    blankComponents.push(imageblank);
    
    for (const thisComponent of blankComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function blankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank' ---
    // get current time
    t = blankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *imageblank* updates
    if (t >= 0.0 && imageblank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imageblank.tStart = t;  // (not accounting for frame time here)
      imageblank.frameNStart = frameN;  // exact frame index
      
      imageblank.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (imageblank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      imageblank.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blankComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank' ---
    for (const thisComponent of blankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank.stopped', globalClock.getTime());
    if (blankMaxDurationReached) {
        blankClock.add(blankMaxDuration);
    } else {
        blankClock.add(1.000000);
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
