import 'package:flutter/material.dart';
import "package:quizui/data/describe_data.dart";

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
  void initState() {
    super.initState();
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
      ),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SizedBox(height: 16, width: double.infinity),
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
                  questionList[currentQuestionIndex].questionText),
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
