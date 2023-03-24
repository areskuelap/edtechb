import 'package:flutter/material.dart';
import "package:audioplayers/audioplayers.dart";
import "package:quizui/data/listening_data.dart";

class ListeningMedium extends StatefulWidget {
  const ListeningMedium({Key? key}) : super(key: key);
  @override
  State<ListeningMedium> createState() => _MyAppState();
}

class _MyAppState extends State<ListeningMedium> {
  bool isVisible = false;
  bool fav = false;
  final fieldText = TextEditingController();
  List<Question> questionList = getQuestions();
  int currentQuestionIndex = 0;
  int currentAnswerIndex = 0;
  final AudioPlayer audioPlayer = AudioPlayer();
  final String url1 =
      "https://drive.google.com/uc?export=view&id=1yhQYzrr6-Ydu9l6GjyxW-q7WNZtVdofm";
  @override
  Widget build(BuildContext context) {
    var title = 'Listening section';

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
              "Type the statement you hear",
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 19),
              textAlign: TextAlign.center,
            ),
          ),
          Container(
            padding: EdgeInsets.fromLTRB(20, 0, 20, 20),
            child: ElevatedButton(
              child: Text("Play audio"),
              onPressed: () {
                audioPlayer
                    .play(questionList[currentQuestionIndex].questionText);
              },
              style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all(
                  Color(0xfff9930d),
                ),
                fixedSize: MaterialStateProperty.all(Size(120, 40)),
              ),
            ),
          ),
          Container(
            padding: EdgeInsets.fromLTRB(20, 0, 20, 40),
            child: TextField(
              controller: fieldText,
              decoration: InputDecoration(
                border: OutlineInputBorder(),
                hintText: "Type in here",
              ),
              keyboardType: TextInputType.multiline,
              minLines: 3,
              maxLines: null,
            ),
          ),
          Visibility(
            visible: isVisible,
            child: Column(
              children: <Widget>[
                Container(
                  padding: EdgeInsets.fromLTRB(30, 10, 30, 0),
                  child: Text("Sample answer",
                      style:
                          TextStyle(fontWeight: FontWeight.bold, fontSize: 20)),
                ),
                Container(
                    padding: EdgeInsets.fromLTRB(30, 5, 30, 10),
                    child: Text(questionList[currentAnswerIndex].answerText,
                        style: TextStyle(
                            fontWeight: FontWeight.w500, fontSize: 15))),
              ],
            ),
          ),
          Container(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: <Widget>[
                Container(
                  child: ElevatedButton(
                    child: Text(fav ? "Retry" : "Submit"),
                    onPressed: () {
                      if (fav)
                        setState(() => fav = false);
                      else
                        setState(() => fav = true);
                      setState(() => isVisible = !isVisible);
                    },
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
                        currentQuestionIndex++;
                        currentAnswerIndex++;
                        isVisible = false;
                        fieldText.clear();
                        fav = false;
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
            height: 50,
          ),
        ],
      ),
    );
  }
}
