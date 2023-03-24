import 'package:flutter/material.dart';
import "package:quizui/screens/select/selecth.dart";

bool fav = false;
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

bool favcheck = false;

class Selectg extends StatefulWidget {
  const Selectg({Key? key}) : super(key: key);

  @override
  State<Selectg> createState() => _MyAppState();
}

class _MyAppState extends State<Selectg> {
  @override
  Widget build(BuildContext context) {
    var title = 'Literacy';
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
                    child: Text("undergo",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav1 = !fav1),
                    style: ButtonStyle(
                        backgroundColor: fav1
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(
                                BorderSide(color: Colors.green, width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(80, 40))),
                  ),
                  ElevatedButton(
                    child: Text("insane",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav2 = !fav2),
                    style: ButtonStyle(
                        backgroundColor: fav2
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(
                                BorderSide(color: Colors.green, width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(80, 40))),
                  ),
                  ElevatedButton(
                    child: Text("prestricied",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav3 = !fav3),
                    style: ButtonStyle(
                        backgroundColor: fav3
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(
                                BorderSide(color: Colors.red, width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(100, 40))),
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
                    child: Text("tremised",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav5 = !fav5),
                    style: ButtonStyle(
                        backgroundColor: fav5
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(
                                BorderSide(color: Colors.red, width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(80, 40))),
                  ),
                  ElevatedButton(
                    child: Text("richness",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav6 = !fav6),
                    style: ButtonStyle(
                        backgroundColor: fav6
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(
                                BorderSide(color: Colors.green, width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(80, 40))),
                  ),
                  ElevatedButton(
                    child: Text("oefuse",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav7 = !fav7),
                    style: ButtonStyle(
                        backgroundColor: fav7
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(
                                BorderSide(color: Colors.red, width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(80, 40))),
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
                    child: Text("unfairned",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav9 = !fav9),
                    style: ButtonStyle(
                        backgroundColor: fav9
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(
                                BorderSide(color: Colors.red, width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(100, 40))),
                  ),
                  ElevatedButton(
                    child: Text("trustworthy",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav10 = !fav10),
                    style: ButtonStyle(
                        backgroundColor: fav11
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(
                                BorderSide(color: Colors.green, width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(100, 40))),
                  ),
                  ElevatedButton(
                    child: Text("deodorant",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav11 = !fav11),
                    style: ButtonStyle(
                        backgroundColor: fav11
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(
                                BorderSide(color: Colors.green, width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(100, 40))),
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
                    child: Text("schooling",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav = !fav),
                    style: ButtonStyle(
                        backgroundColor: fav
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(
                                BorderSide(color: Colors.green, width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(100, 40))),
                  ),
                  ElevatedButton(
                    child: Text("endessive",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav4 = !fav4),
                    style: ButtonStyle(
                        backgroundColor: fav4
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(
                                BorderSide(color: Colors.red, width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(100, 40))),
                  ),
                  ElevatedButton(
                    child: Text("acquaintance",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav8 = !fav8),
                    style: ButtonStyle(
                        backgroundColor: fav8
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(
                                BorderSide(color: Colors.green, width: 2))
                            : MaterialStateProperty.all(
                                BorderSide(color: Colors.white, width: 2)),
                        fixedSize: MaterialStateProperty.all(Size(100, 40))),
                  ),
                ]),
          ),
          SizedBox(
            height: 30,
          ),
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
                      Navigator.of(context).push(
                          MaterialPageRoute(builder: (context) => Selecth()));
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
