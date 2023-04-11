import 'package:flutter/material.dart';
import "package:quizui/data/describe_data.dart";
import 'dart:async';

class Describe extends StatefulWidget {
  const Describe({Key? key}) : super(key: key);
  @override
  State<Describe> createState() => _MyAppState();
}

class _MyAppState extends State<Describe> {
  bool isVisible = false;
  bool fav = false;
  final fieldText = TextEditingController();
  List<Question> questionList = getQuestions();
  int currentQuestionIndex = 0;
  int currentAnswerIndex = 0;
  int _wordCount = 0;
  Timer? _timer;
  int _seconds = 0;
  int _progressBarDuration = 60; // 4 minutes in seconds

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
  void _countWords(String text) {
    List<String> words = text.trim().split(' ');
    setState(() {
      _wordCount = words.length;
    });
  }

  int _timeLeft = 60;
  bool _isActive = false;

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
              child: Text("You have 60 seconds for this task",
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
            SizedBox(height: 16),
            Container(
              padding: EdgeInsets.fromLTRB(10, 10, 10, 10),
              height: 80,
              child: Text(
                "Write one or more sentences that describe the photo",
                style: TextStyle(fontWeight: FontWeight.w500, fontSize: 19),
                textAlign: TextAlign.center,
              ),
            ),
            Container(
              height: 250,
              padding: EdgeInsets.fromLTRB(20, 10, 20, 0),
              child: Image.network(
                questionList[currentQuestionIndex].questionText,
                loadingBuilder: (BuildContext context, Widget child,
                    ImageChunkEvent? loadingProgress) {
                  if (loadingProgress == null) {
                    return child;
                  }
                  return Center(
                    child: CircularProgressIndicator(
                      value: loadingProgress.expectedTotalBytes != null
                          ? loadingProgress.cumulativeBytesLoaded /
                              loadingProgress.expectedTotalBytes!
                          : null,
                    ),
                  );
                },
              ),
            ),
            Container(
              padding: EdgeInsets.fromLTRB(20, 10, 20, 10),
              child: TextField(
                onChanged: _countWords,
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
              height: 20,
            ),
          ],
        ),
      ),
    );
  }
}
