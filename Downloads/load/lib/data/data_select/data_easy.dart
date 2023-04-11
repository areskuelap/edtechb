import 'package:flutter/cupertino.dart';

class One {
  final String oneText;
  final String oneAnswer;
  One(this.oneText, this.oneAnswer);
}

List<One> getOne() {
  List<One> list = [];
  //ADD questions and answer here

  list.add(One("green", "Colors.red"));

  list.add(One("sorry", "Colors.green"));

  list.add(One("leave", "Colors.red"));

  return list;
}

class Two {
  final String twoText;
  final String twoAnswer;
  Two(this.twoText, this.twoAnswer);
}

List<Two> getTwo() {
  List<Two> list = [];
  //ADD questions and answer here

  list.add(Two("make", "Colors.green"));

  list.add(Two("nigh", "Colors.green"));

  list.add(Two("silence", "Colors.red"));

  return list;
}

class Three {
  final String threeText;
  final String threeAnswer;
  Three(this.threeText, this.threeAnswer);
}

List<Three> getThree() {
  List<Three> list = [];
  //ADD questions and answer here

  list.add(Three("centuries", "Colors.green"));

  list.add(Three("want", "Colors.green"));

  list.add(Three("had", "Colors.red"));

  return list;
}

class Four {
  final String fourText;
  final String fourAnswer;
  Four(this.fourText, this.fourAnswer);
}

List<Four> getFour() {
  List<Four> list = [];
  //ADD questions and answer here

  list.add(Four("green", "Colors.red"));

  list.add(Four("sorry", "Colors.green"));

  list.add(Four("leave", "Colors.green"));

  return list;
}

class Five {
  final String fiveText;
  final String fiveAnswer;
  Five(this.fiveText, this.fiveAnswer);
}

List<Five> getFive() {
  List<Five> list = [];
  //ADD questions and answer here

  list.add(Five("make", "Colors.red"));

  list.add(Five("nigh", "Colors.red"));

  list.add(Five("silence", "Colors.red"));

  return list;
}

class Six {
  final String sixText;
  final String sixAnswer;
  Six(this.sixText, this.sixAnswer);
}

List<Six> getSix() {
  List<Six> list = [];
  //ADD questions and answer here

  list.add(Six("centuries", "Colors.green"));

  list.add(Six("want", "Colors.green"));

  list.add(Six("had", "Colors.red"));

  return list;
}
