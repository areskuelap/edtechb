import 'package:flutter/material.dart';
import "package:quizui/data/reading_medium_data.dart";
import 'dart:async';

class ReadingMedium extends StatefulWidget {
  const ReadingMedium({Key? key}) : super(key: key);
  @override
  State<ReadingMedium> createState() => _MyAppState();
}

class _MyAppState extends State<ReadingMedium> {
  Timer? _timer;
  int _seconds = 0;
  int _progressBarDuration = 240; // 4 minutes in seconds
  bool isVisible = false;
  bool fav = false;
  final fieldText = TextEditingController();
  List<Question> questionList = getQuestions();
  int currentQuestionIndex = 0;
  int currentAnswerIndex = 0;
  int currentOneIndex = 0;
  int currentTwoIndex = 0;
  int currentThreeIndex = 0;
  int currentFourIndex = 0;
  int _wordCount = 0;

  @override
  void _countWords(String text) {
    List<String> words = text.trim().split(' ');
    setState(() {
      _wordCount = words.length;
    });
  }

  void startProgressBar() {
    _seconds = 0;
    _timer?.cancel();
    _timer = Timer.periodic(Duration(seconds: 1), (timer) {
      setState(() {
        _seconds++;
        if (_seconds >= _progressBarDuration) {
          _timer?.cancel();
        }
      });
    });
  }

  void onQuestionSelected(int newIndex) {
    setState(() {
      currentQuestionIndex = newIndex;
      currentAnswerIndex = newIndex;
      currentOneIndex = newIndex;
      currentTwoIndex = newIndex;
      currentThreeIndex = newIndex;
      currentFourIndex = newIndex;
      isVisible = false;
      fieldText.clear();
      fav = false;
    });
    startProgressBar();
  }

  @override
  void initState() {
    super.initState();
    startProgressBar();
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    var title = 'Writing section';
    return Scaffold(
      resizeToAvoidBottomInset: false,
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
        actions: [
          PopupMenuButton<int>(
            itemBuilder: (context) => List.generate(
              questionList.length,
              (index) => PopupMenuItem<int>(
                value: index,
                child: Text('Question ${index + 1}'),
              ),
            ),
            onSelected: (index) => onQuestionSelected(index),
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
              padding: EdgeInsets.fromLTRB(30, 20, 30, 20),
              child: Text("You have 4 minutes for this task",
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w500)),
            ),
            Container(
              height: 10,
              child: LinearProgressIndicator(
                value: _seconds / _progressBarDuration,
                backgroundColor: Colors.grey.shade300,
                valueColor: AlwaysStoppedAnimation<Color>(Color(0xfff9930d)),
              ),
            ),
            Container(
              padding: EdgeInsets.fromLTRB(30, 30, 30, 10),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text(
                    questionList[currentQuestionIndex].questionText,
                    style: TextStyle(fontWeight: FontWeight.w500, fontSize: 19),
                  ),
                  Text(
                    questionList[currentOneIndex].one,
                    style: TextStyle(fontWeight: FontWeight.w400, fontSize: 19),
                  ),
                  Text(
                    questionList[currentTwoIndex].two,
                    style: TextStyle(fontWeight: FontWeight.w400, fontSize: 19),
                  ),
                  Text(
                    questionList[currentThreeIndex].three,
                    style: TextStyle(fontWeight: FontWeight.w400, fontSize: 19),
                  ),
                  Text(
                    questionList[currentFourIndex].four,
                    style: TextStyle(fontWeight: FontWeight.w400, fontSize: 19),
                  ),
                ],
              ),
            ),
            Container(
              padding: EdgeInsets.fromLTRB(20, 0, 20, 10),
              child: TextField(
                onChanged: _countWords,
                controller: fieldText,
                decoration: InputDecoration(
                  border: OutlineInputBorder(),
                  hintText: "Type in here",
                ),
                keyboardType: TextInputType.multiline,
                minLines: 6,
                maxLines: null,
              ),
            ),
            Container(
              padding: EdgeInsets.fromLTRB(20, 0, 20, 20),
              child: Text('Word count: $_wordCount'),
            ),
            Visibility(
              visible: isVisible,
              child: Column(
                children: <Widget>[
                  Container(
                    padding: EdgeInsets.fromLTRB(30, 10, 30, 0),
                    child: Text("Sample answer",
                        style: TextStyle(
                            fontWeight: FontWeight.bold, fontSize: 20)),
                  ),
                  Container(
                      padding: EdgeInsets.fromLTRB(30, 5, 30, 10),
                      child: Text(questionList[currentAnswerIndex].answerText,
                          style: TextStyle(
                              fontWeight: FontWeight.w400, fontSize: 15))),
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
                          currentOneIndex++;
                          currentTwoIndex++;
                          currentThreeIndex++;
                          currentFourIndex++;
                          isVisible = false;
                          fieldText.clear();
                          fav = false;
                        });
                        startProgressBar();
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
              height: 30,
            ),
          ],
        ),
      ),
    );
  }
}
