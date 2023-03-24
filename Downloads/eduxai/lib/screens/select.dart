import 'package:flutter/material.dart';
import "package:quizui/screens/select/selecta.dart";

bool fav = false;
bool fav1 = false;
bool fav2 = false;
bool fav3 = false;
bool fav4 = false;
bool fav5 = false;
bool fav6 = false;
bool fav7 = false;

bool favcheck = false;

class Select extends StatefulWidget {
  const Select({Key? key}) : super(key: key);

  @override
  State<Select> createState() => _MyAppState();
}

class _MyAppState extends State<Select> {
  @override
  Widget build(BuildContext context) {
    var title = 'general knowledge';
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
                    child: Text("Sweeden",
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
                        fixedSize: MaterialStateProperty.all(Size(80, 40))),
                  ),
                  ElevatedButton(
                    child: Text("Sweeden",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav1 = !fav1),
                    style: ButtonStyle(
                        backgroundColor: fav1
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
                    child: Text("Sweeden",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav2 = !fav2),
                    style: ButtonStyle(
                        backgroundColor: fav2
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
                    child: Text("Sweeden",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav3 = !fav3),
                    style: ButtonStyle(
                        backgroundColor: fav3
                            ? MaterialStateProperty.all(Colors.orange)
                            : MaterialStateProperty.all(Colors.white),
                        side: favcheck
                            ? MaterialStateProperty.all(
                                BorderSide(color: Colors.green, width: 2))
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
                    child: Text("Sweeden",
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
                        fixedSize: MaterialStateProperty.all(Size(80, 40))),
                  ),
                  ElevatedButton(
                    child: Text("Sweeden",
                        style: TextStyle(color: Colors.black, fontSize: 11)),
                    onPressed: () => setState(() => fav5 = !fav5),
                    style: ButtonStyle(
                        backgroundColor: fav5
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
                    child: Text("Sweeden",
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
                    child: Text("Sweeden",
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
            height: 80,
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
                          MaterialPageRoute(builder: (context) => Selecta()));
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
