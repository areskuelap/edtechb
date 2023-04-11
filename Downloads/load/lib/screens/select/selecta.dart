import 'package:flutter/material.dart';

bool fav1 = false;
bool fav2 = false;
bool fav3 = false;
bool fav4 = false;
bool fav5 = false;
bool fav6 = false;
bool fav7 = false;
bool fav8 = false;
bool fav9 = false;
bool fav10 = false;
bool fav11 = false;
bool fav12 = false;

bool favcheck = false;

class SelectHard extends StatefulWidget {
  const SelectHard({Key? key}) : super(key: key);

  @override
  State<SelectHard> createState() => _MyAppState();
}

class _MyAppState extends State<SelectHard> {
  List<One> oneList = getOne();
  int onecurrentQuestionIndex = 0;
  int onecurrentAnswerIndex = 0;

  List<Two> twoList = getTwo();
  List<Three> threeList = getThree();
  List<Four> fourList = getFour();
  List<Five> fiveList = getFive();
  List<Six> sixList = getSix();
  List<Seven> sevenList = getSeven();
  List<Eight> eightList = getEight();
  List<Nine> nineList = getNine();
  List<Ten> tenList = getTen();
  List<Eleven> elevenList = getEleven();
  List<Twelve> twelveList = getTwelve();

  void resetButtons() {
    setState(() {
      fav1 = false;
      fav2 = false;
      fav3 = false;
      fav4 = false;
      fav5 = false;
      fav6 = false;
      fav7 = false;
      fav8 = false;
      fav9 = false;
      fav10 = false;
      fav11 = false;
      fav12 = false;
      favcheck = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    var title = '';
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color(0xfff9930d),
        leading: InkWell(
          onTap: () {
            Navigator.pop(context);
          },
          child: Icon(
            Icons.arrow_back_ios,
            color: Colors.black54,
          ),
        ),
        title: Center(
          child: Text(title,
              style:
                  TextStyle(fontWeight: FontWeight.bold, color: Colors.black)),
        ),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          SizedBox(width: double.infinity),
          Container(
            height: 40,
            child: Text(
              "Select the real English words",
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 19),
              textAlign: TextAlign.center,
            ),
          ),
          SizedBox(
            height: 20,
          ),
          Container(
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  ElevatedButton(
                    child: Text(oneList[onecurrentQuestionIndex].oneText,
                        style: TextStyle(color: Colors.black, fontSize: 12)),
                    onPressed: () => setState(() => fav1 = !fav1),
                    style: ButtonStyle(
                        backgroundColor: fav1
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(BorderSide(
                                color: Color(int.parse(
                                    oneList[onecurrentAnswerIndex]
                                        .oneAnswer
                                        .replaceAll('#', '0xFF'))),
                                width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(120, 40))),
                  ),
                  ElevatedButton(
                    child: Text(twoList[onecurrentQuestionIndex].twoText,
                        style: TextStyle(color: Colors.black, fontSize: 12)),
                    onPressed: () => setState(() => fav2 = !fav2),
                    style: ButtonStyle(
                        backgroundColor: fav2
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(BorderSide(
                                color: Color(int.parse(
                                    twoList[onecurrentAnswerIndex]
                                        .twoAnswer
                                        .replaceAll('#', '0xFF'))),
                                width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(120, 40))),
                  ),
                  ElevatedButton(
                    child: Text(threeList[onecurrentQuestionIndex].threeText,
                        style: TextStyle(color: Colors.black, fontSize: 12)),
                    onPressed: () => setState(() => fav3 = !fav3),
                    style: ButtonStyle(
                        backgroundColor: fav3
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(BorderSide(
                                color: Color(int.parse(
                                    threeList[onecurrentAnswerIndex]
                                        .threeAnswer
                                        .replaceAll('#', '0xFF'))),
                                width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(120, 40))),
                  ),
                ]),
          ),
          SizedBox(
            height: 20,
          ),
          Container(
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  ElevatedButton(
                    child: Text(fourList[onecurrentQuestionIndex].fourText,
                        style: TextStyle(color: Colors.black, fontSize: 12)),
                    onPressed: () => setState(() => fav4 = !fav4),
                    style: ButtonStyle(
                        backgroundColor: fav4
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(BorderSide(
                                color: Color(int.parse(
                                    fourList[onecurrentAnswerIndex]
                                        .fourAnswer
                                        .replaceAll('#', '0xFF'))),
                                width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(120, 40))),
                  ),
                  ElevatedButton(
                    child: Text(fiveList[onecurrentQuestionIndex].fiveText,
                        style: TextStyle(color: Colors.black, fontSize: 12)),
                    onPressed: () => setState(() => fav5 = !fav5),
                    style: ButtonStyle(
                        backgroundColor: fav5
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(BorderSide(
                                color: Color(int.parse(
                                    fiveList[onecurrentAnswerIndex]
                                        .fiveAnswer
                                        .replaceAll('#', '0xFF'))),
                                width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(120, 40))),
                  ),
                  ElevatedButton(
                    child: Text(sixList[onecurrentQuestionIndex].sixText,
                        style: TextStyle(color: Colors.black, fontSize: 12)),
                    onPressed: () => setState(() => fav6 = !fav6),
                    style: ButtonStyle(
                        backgroundColor: fav6
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(BorderSide(
                                color: Color(int.parse(
                                    sixList[onecurrentAnswerIndex]
                                        .sixAnswer
                                        .replaceAll('#', '0xFF'))),
                                width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(120, 40))),
                  ),
                ]),
          ),
          SizedBox(
            height: 20,
          ),
          Container(
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  ElevatedButton(
                    child: Text(sevenList[onecurrentQuestionIndex].sevenText,
                        style: TextStyle(color: Colors.black, fontSize: 12)),
                    onPressed: () => setState(() => fav7 = !fav7),
                    style: ButtonStyle(
                        backgroundColor: fav7
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(BorderSide(
                                color: Color(int.parse(
                                    sevenList[onecurrentAnswerIndex]
                                        .sevenAnswer
                                        .replaceAll('#', '0xFF'))),
                                width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(120, 40))),
                  ),
                  ElevatedButton(
                    child: Text(eightList[onecurrentQuestionIndex].eightText,
                        style: TextStyle(color: Colors.black, fontSize: 12)),
                    onPressed: () => setState(() => fav8 = !fav8),
                    style: ButtonStyle(
                        backgroundColor: fav8
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(BorderSide(
                                color: Color(int.parse(
                                    eightList[onecurrentAnswerIndex]
                                        .eightAnswer
                                        .replaceAll('#', '0xFF'))),
                                width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(120, 40))),
                  ),
                  ElevatedButton(
                    child: Text(nineList[onecurrentQuestionIndex].nineText,
                        style: TextStyle(color: Colors.black, fontSize: 12)),
                    onPressed: () => setState(() => fav9 = !fav9),
                    style: ButtonStyle(
                        backgroundColor: fav9
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(BorderSide(
                                color: Color(int.parse(
                                    nineList[onecurrentAnswerIndex]
                                        .nineAnswer
                                        .replaceAll('#', '0xFF'))),
                                width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(120, 40))),
                  ),
                ]),
          ),
          SizedBox(
            height: 20,
          ),
          Container(
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  ElevatedButton(
                    child: Text(tenList[onecurrentQuestionIndex].tenText,
                        style: TextStyle(color: Colors.black, fontSize: 12)),
                    onPressed: () => setState(() => fav10 = !fav10),
                    style: ButtonStyle(
                        backgroundColor: fav10
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(BorderSide(
                                color: Color(int.parse(
                                    tenList[onecurrentAnswerIndex]
                                        .tenAnswer
                                        .replaceAll('#', '0xFF'))),
                                width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(120, 40))),
                  ),
                  ElevatedButton(
                    child: Text(elevenList[onecurrentQuestionIndex].elevenText,
                        style: TextStyle(color: Colors.black, fontSize: 12)),
                    onPressed: () => setState(() => fav11 = !fav11),
                    style: ButtonStyle(
                        backgroundColor: fav11
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(BorderSide(
                                color: Color(int.parse(
                                    elevenList[onecurrentAnswerIndex]
                                        .elevenAnswer
                                        .replaceAll('#', '0xFF'))),
                                width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(120, 40))),
                  ),
                  ElevatedButton(
                    child: Text(twelveList[onecurrentQuestionIndex].twelveText,
                        style: TextStyle(color: Colors.black, fontSize: 12)),
                    onPressed: () => setState(() => fav12 = !fav12),
                    style: ButtonStyle(
                        backgroundColor: fav12
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(BorderSide(
                                color: Color(int.parse(
                                    twelveList[onecurrentAnswerIndex]
                                        .twelveAnswer
                                        .replaceAll('#', '0xFF'))),
                                width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(120, 40))),
                  ),
                ]),
          ),
          SizedBox(height: 40),
          Container(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: <Widget>[
                Container(
                  child: ElevatedButton(
                    child: Text("Submit"),
                    onPressed: () => setState(() => favcheck = true),
                    style: ButtonStyle(
                      backgroundColor: MaterialStateProperty.all(
                        Color(0xfff9930d),
                      ),
                      fixedSize: MaterialStateProperty.all(Size(120, 40)),
                    ),
                  ),
                ),
                Container(
                  child: ElevatedButton(
                    child: Text("Next"),
                    onPressed: () {
                      setState(() {
                        onecurrentQuestionIndex++;
                        onecurrentAnswerIndex++;
                        resetButtons();
                      });
                    },
                    style: ButtonStyle(
                      backgroundColor: MaterialStateProperty.all(
                        Color(0xfff9930d),
                      ),
                      fixedSize: MaterialStateProperty.all(Size(120, 40)),
                    ),
                  ),
                ),
              ],
            ),
          ),
          SizedBox(
            height: 130,
          ),
        ],
      ),
    );
  }
}

class One {
  final String oneText;
  final String oneAnswer;
  One(this.oneText, this.oneAnswer);
}

List<One> getOne() {
  List<One> list = [];
  list.add(One("readership", "#00FF00"));
  list.add(One("harsh", "#00FF00"));
  list.add(One("horizon", "#00FF00"));
  return list;
}

class Two {
  final String twoText;
  final String twoAnswer;
  Two(this.twoText, this.twoAnswer);
}

List<Two> getTwo() {
  List<Two> list = [];
  list.add(Two("morcelery", "#FF0000"));
  list.add(Two("thrive", "#00FF00"));
  list.add(Two("motoming", "#FF0000"));
  return list;
}

class Three {
  final String threeText;
  final String threeAnswer;
  Three(this.threeText, this.threeAnswer);
}

List<Three> getThree() {
  List<Three> list = [];
  list.add(Three("reliability", "#00FF00"));
  list.add(Three("eligible", "#00FF00"));
  list.add(Three("staintic", "#FF0000"));
  return list;
}

class Four {
  final String fourText;
  final String fourAnswer;
  Four(this.fourText, this.fourAnswer);
}

List<Four> getFour() {
  List<Four> list = [];
  list.add(Four("conscientious", "#00FF00"));
  list.add(Four("publicly", "#00FF00"));
  list.add(Four("horrified", "#00FF00"));
  return list;
}

class Five {
  final String fiveText;
  final String fiveAnswer;
  Five(this.fiveText, this.fiveAnswer);
}

List<Five> getFive() {
  List<Five> list = [];

  list.add(Five("resimize", "#FF0000"));
  list.add(Five("convolition", "#FF0000"));
  list.add(Five("misibilite", "#FF0000"));

  return list;
}

class Six {
  final String sixText;
  final String sixAnswer;
  Six(this.sixText, this.sixAnswer);
}

List<Six> getSix() {
  List<Six> list = [];

  list.add(Six("shangul", "#FF0000"));
  list.add(Six("diplomatic", "#00FF00"));
  list.add(Six("splendid", "#00FF00"));

  return list;
}

class Seven {
  final String sevenText;
  final String sevenAnswer;
  Seven(this.sevenText, this.sevenAnswer);
}

List<Seven> getSeven() {
  List<Seven> list = [];

  list.add(Seven("enforce", "#00FF00"));

  list.add(Seven("onovil", "#FF0000"));

  list.add(Seven("misumended", "#FF0000"));

  return list;
}

class Eight {
  final String eightText;
  final String eightAnswer;
  Eight(this.eightText, this.eightAnswer);
}

List<Eight> getEight() {
  List<Eight> list = [];

  list.add(Eight("symbolic", "#00FF00"));

  list.add(Eight("emense", "#FF0000"));

  list.add(Eight("outsever", "#FF0000"));

  return list;
}

class Nine {
  final String nineText;
  final String nineAnswer;
  Nine(this.nineText, this.nineAnswer);
}

List<Nine> getNine() {
  List<Nine> list = [];

  list.add(Nine("revivately", "#FF0000"));

  list.add(Nine("stility", "#FF0000"));

  list.add(Nine("viciler", "#FF0000"));

  return list;
}

class Ten {
  final String tenText;
  final String tenAnswer;
  Ten(this.tenText, this.tenAnswer);
}

List<Ten> getTen() {
  List<Ten> list = [];

  list.add(Ten("incurner", "#FF0000"));

  list.add(Ten("assembly", "#00FF00"));

  list.add(Ten("debel", "#FF0000"));

  return list;
}

class Eleven {
  final String elevenText;
  final String elevenAnswer;
  Eleven(this.elevenText, this.elevenAnswer);
}

List<Eleven> getEleven() {
  List<Eleven> list = [];

  list.add(Eleven("engrossed", "#00FF00"));

  list.add(Eleven("synonym", "#00FF00"));

  list.add(Eleven("hyned", "#FF0000"));

  return list;
}

class Twelve {
  final String twelveText;
  final String twelveAnswer;
  Twelve(this.twelveText, this.twelveAnswer);
}

List<Twelve> getTwelve() {
  List<Twelve> list = [];

  list.add(Twelve("impurance", "#FF0000"));

  list.add(Twelve("materialism", "#00FF00"));

  list.add(Twelve("minitalism", "#FF0000"));

  return list;
}
