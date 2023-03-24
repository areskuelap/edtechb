import "package:flutter/material.dart";
import "package:quizui/screens/select.dart";
import "package:quizui/screens/select/selectmedium/selecta.dart";
import "package:quizui/screens/select/selecteasy/selecta.dart";

class NextSelect extends StatefulWidget {
  const NextSelect({Key? key}) : super(key: key);
  _WidgetState createState() => _WidgetState();
}

class _WidgetState extends State<NextSelect> {
  @override
  Widget build(BuildContext context) {
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
          child: Text("",
              style:
                  TextStyle(fontWeight: FontWeight.bold, color: Colors.black)),
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
                padding: EdgeInsets.fromLTRB(40, 40, 40, 20),
                child: Text(
                  "Hi, choose one category to start",
                  style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                )),
            Container(
                padding: EdgeInsets.fromLTRB(40, 10, 40, 40),
                child: ElevatedButton.icon(
                  style: ButtonStyle(
                      backgroundColor:
                          MaterialStateProperty.all(Color(0xfffdc818)),
                      shape: MaterialStateProperty.all(
                        RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(30),
                        ),
                      ),
                      fixedSize: MaterialStateProperty.all(Size(130, 50))),
                  onPressed: () {
                    Navigator.of(context).push(
                        MaterialPageRoute(builder: (context) => Selectas()));
                  },
                  icon: Icon(Icons.play_arrow), //icon data for elevated button
                  label: Text("Easy level"), //label text
                )),
            Container(
                padding: EdgeInsets.fromLTRB(40, 0, 40, 40),
                child: ElevatedButton.icon(
                  style: ButtonStyle(
                      backgroundColor:
                          MaterialStateProperty.all(Color(0xfffdc818)),
                      shape: MaterialStateProperty.all(
                        RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(30),
                        ),
                      ),
                      fixedSize: MaterialStateProperty.all(Size(130, 50))),
                  onPressed: () {
                    Navigator.of(context).push(
                        MaterialPageRoute(builder: (context) => Selecta()));
                  },
                  icon: Icon(Icons
                      .sentiment_satisfied_sharp), //icon data for elevated button
                  label: Text("Medium level"), //label text
                )),
            Container(
                padding: EdgeInsets.fromLTRB(40, 0, 40, 40),
                child: ElevatedButton.icon(
                  style: ButtonStyle(
                      backgroundColor:
                          MaterialStateProperty.all(Color(0xfffdc818)),
                      shape: MaterialStateProperty.all(
                        RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(30),
                        ),
                      ),
                      fixedSize: MaterialStateProperty.all(Size(130, 50))),
                  onPressed: () {
                    Navigator.of(context).push(
                        MaterialPageRoute(builder: (context) => Select()));
                  },
                  icon: Icon(Icons
                      .sentiment_very_satisfied_outlined), //icon data for elevated button
                  label: Text("Hard level"), //label text
                )),
          ],
        ),
      ),
    );
  }
}
