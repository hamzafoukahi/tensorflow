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
  fingerpose.FingerDirection.VerticalUp,
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
  fingerpose.FingerDirection.VerticalUp,
  1.0
);









//-----------

export const GE = new fingerpose.GestureEstimator([
  fingerpose.Gestures.VictoryGesture,
  fingerpose.Gestures.ThumbsUpGesture,
  oneFingerGesture,
  stopGesture,
]);
