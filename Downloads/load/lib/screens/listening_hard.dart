import 'dart:async';
import 'package:flutter/material.dart';
import "package:audioplayers/audioplayers.dart";
import "package:quizui/data/listening_hard_data.dart";

class ListeningHard extends StatefulWidget {
  const ListeningHard({Key? key}) : super(key: key);
  @override
  State<ListeningHard> createState() => _MyAppState();
}

class _MyAppState extends State<ListeningHard> {
  bool isVisible = false;
  bool fav = false;
  final fieldText = TextEditingController();
  List<Question> questionList = getQuestions();
  int currentQuestionIndex = 0;
  int currentAnswerIndex = 0;
  final AudioPlayer audioPlayer = AudioPlayer();

  late Timer _timer;
  int _start = 30;

  void startTimer() {
    _start = 30;
    _timer = Timer.periodic(Duration(seconds: 1), (timer) {
      setState(() {
        if (_start < 1) {
          timer.cancel();
        } else {
          _start--;
        }
      });
    });
  }

  void resetTimer() {
    _timer.cancel();
    startTimer();
  }

  @override
  void initState() {
    super.initState();
    startTimer();
  }

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }

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
                  TextStyle(fontWeight: FontWeight.w600, color: Colors.black)),
        ),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          SizedBox(width: double.infinity),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 10, 0, 10),
                child: DropdownButton<int>(
                  value: currentQuestionIndex,
                  items: List.generate(
                    questionList.length,
                    (index) => DropdownMenuItem<int>(
                      child: Text("Question ${index + 1}"),
                      value: index,
                    ),
                  ),
                  onChanged: (int? newIndex) {
                    if (newIndex != null) {
                      setState(() {
                        currentQuestionIndex = newIndex;
                        currentAnswerIndex = newIndex;
                        isVisible = false;
                        fieldText.clear();
                        fav = false;
                        resetTimer();
                      });
                    }
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 10, 20, 10),
                child: SizedBox(
                  width: MediaQuery.of(context).size.width * 0.5,
                  child: LinearProgressIndicator(
                    value: (_start / 30),
                    backgroundColor: Colors.grey,
                    valueColor:
                        AlwaysStoppedAnimation<Color>(Color(0xfff9930d)),
                  ),
                ),
              ),
            ],
          ),
          Container(
            height: 40,
            child: Text(
              "Type the statement you hear",
              style: TextStyle(fontWeight: FontWeight.w600, fontSize: 19),
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
                          TextStyle(fontWeight: FontWeight.w500, fontSize: 20)),
                ),
                Container(
                    padding: EdgeInsets.fromLTRB(30, 5, 30, 10),
                    child: Text(questionList[currentAnswerIndex].answerText,
                        style: TextStyle(
                            fontWeight: FontWeight.bold, fontSize: 15))),
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
                        resetTimer();
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
