import * as fingerpose from 'fingerpose';

const oneFingerGesture = new fingerpose.GestureDescription('one_finger');
oneFingerGesture.addCurl(
  fingerpose.Finger.Index,
  fingerpose.FingerCurl.NoCurl,
  1.0
);

//-----
oneFingerGesture.addDirection(
  fingerpose.Finger.Index,
  fingerpose.FingerDirection.VerticalUp,
  0.25
);
//-------

oneFingerGesture.addCurl(
  fingerpose.Finger.Thumb,
  fingerpose.FingerCurl.FullCurl,
  1.0
);
oneFingerGesture.addCurl(
  fingerpose.Finger.Middle,
  fingerpose.FingerCurl.FullCurl,
  1.0
);
oneFingerGesture.addCurl(
  fingerpose.Finger.Ring,
  fingerpose.FingerCurl.FullCurl,
  1.0
);
oneFingerGesture.addCurl(
  fingerpose.Finger.Pinky,
  fingerpose.FingerCurl.FullCurl,
  1.0
);
//--------------------------------

const twoFingerGesture = new fingerpose.GestureDescription('two_fingers');
twoFingerGesture.addCurl(
  fingerpose.Finger.Index,
  fingerpose.FingerCurl.NoCurl,
  1.0
);

//-----
twoFingerGesture.addDirection(
  fingerpose.Finger.Index,
  fingerpose.FingerDirection.VerticalUp,
  1.0

);
//-------

twoFingerGesture.addCurl(
  fingerpose.Finger.Thumb,
  fingerpose.FingerCurl.FullCurl,
  1.0
);

twoFingerGesture.addCurl(
  fingerpose.Finger.Middle,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
twoFingerGesture.addDirection(
  fingerpose.Finger.Middle,
  fingerpose.FingerDirection.VerticalUp,
  1.0
);
twoFingerGesture.addCurl(
  fingerpose.Finger.Ring,
  fingerpose.FingerCurl.FullCurl,
  1.0
);

twoFingerGesture.addCurl(
  fingerpose.Finger.Pinky,
  fingerpose.FingerCurl.FullCurl,
  1.0
);

//--------------------------------
const threeFingerGesture = new fingerpose.GestureDescription('three_fingers');
threeFingerGesture.addCurl(
  fingerpose.Finger.Index,
  fingerpose.FingerCurl.NoCurl,
  1.0
);

//-----
threeFingerGesture.addDirection(
  fingerpose.Finger.Index,
  fingerpose.FingerDirection.VerticalUp,
  1.0

);
//-------

threeFingerGesture.addCurl(
  fingerpose.Finger.Thumb,
  fingerpose.FingerCurl.FullCurl,
  1.0
);

threeFingerGesture.addCurl(
  fingerpose.Finger.Middle,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
threeFingerGesture.addDirection(
  fingerpose.Finger.Middle,
  fingerpose.FingerDirection.VerticalUp,
  1.0
);
threeFingerGesture.addCurl(
  fingerpose.Finger.Ring,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
threeFingerGesture.addDirection(
  fingerpose.Finger.Ring,
  fingerpose.FingerDirection.VerticalUp,
  1.0
);
threeFingerGesture.addCurl(
  fingerpose.Finger.Pinky,
  fingerpose.FingerCurl.FullCurl,
  1.0
);
//-------------------------------

const fourFingerGesture = new fingerpose.GestureDescription('four_fingers');
fourFingerGesture.addCurl(
  fingerpose.Finger.Index,
  fingerpose.FingerCurl.NoCurl,
  1.0
);

//-----
fourFingerGesture.addDirection(
  fingerpose.Finger.Index,
  fingerpose.FingerDirection.VerticalUp,
  1.0

);
//-------

fourFingerGesture.addCurl(
  fingerpose.Finger.Thumb,
  fingerpose.FingerCurl.HalfCurl,
  1.0
);

fourFingerGesture.addCurl(
  fingerpose.Finger.Middle,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
fourFingerGesture.addDirection(
  fingerpose.Finger.Middle,
  fingerpose.FingerDirection.VerticalUp,
  1.0
);
fourFingerGesture.addCurl(
  fingerpose.Finger.Ring,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
fourFingerGesture.addDirection(
  fingerpose.Finger.Ring,
  fingerpose.FingerDirection.VerticalUp,
  1.0
);
fourFingerGesture.addCurl(
  fingerpose.Finger.Pinky,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
fourFingerGesture.addDirection(
  fingerpose.Finger.Pinky,
  fingerpose.FingerDirection.VerticalUp,
  1.0

);


//--------------------------------

const stopGesture = new fingerpose.GestureDescription('stop');
stopGesture.addCurl(
  fingerpose.Finger.Index,
  fingerpose.FingerCurl.NoCurl,
  1.0
);

//-----
stopGesture.addDirection(
  fingerpose.Finger.Index,
  fingerpose.FingerDirection.VerticalUp,
  1.0

);
//-------

stopGesture.addCurl(
  fingerpose.Finger.Thumb,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
stopGesture.addDirection(
  fingerpose.Finger.Thumb,
  fingerpose.FingerDirection.DiagonalUpLeft,
  1.0
);
stopGesture.addCurl(
  fingerpose.Finger.Middle,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
stopGesture.addDirection(
  fingerpose.Finger.Middle,
  fingerpose.FingerDirection.VerticalUp,
  1.0
);
stopGesture.addCurl(
  fingerpose.Finger.Ring,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
stopGesture.addDirection(
  fingerpose.Finger.Ring,
  fingerpose.FingerDirection.VerticalUp,
  1.0
);
stopGesture.addCurl(
  fingerpose.Finger.Pinky,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
stopGesture.addDirection(
  fingerpose.Finger.Pinky,
  fingerpose.FingerDirection.DiagonalUpRight,
  1.0
);









//-----------

export const GE = new fingerpose.GestureEstimator([
  // fingerpose.Gestures.VictoryGesture,
  fingerpose.Gestures.ThumbsUpGesture,
  oneFingerGesture,
  twoFingerGesture,
  threeFingerGesture,
  fourFingerGesture,
  stopGesture,
]);
