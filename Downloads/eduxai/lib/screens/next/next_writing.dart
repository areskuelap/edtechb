import "package:flutter/material.dart";
import "package:quizui/screens/reading.dart";
import "package:quizui/screens/reading_hard.dart";
import "package:quizui/screens/reading_medium.dart";

class NextReading extends StatefulWidget {
  const NextReading({Key? key}) : super(key: key);
  _WidgetState createState() => _WidgetState();
}

class _WidgetState extends State<NextReading> {
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
                        MaterialPageRoute(builder: (context) => Reading()));
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
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => ReadingMedium()));
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
                        MaterialPageRoute(builder: (context) => ReadingHard()));
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
