import "package:flutter/material.dart";
import "package:quizui/screens/listening.dart";
import "package:quizui/screens/listening_hard.dart";
import "package:quizui/screens/listening_medium.dart";
import 'package:grouped_list/grouped_list.dart';

class NextListening extends StatefulWidget {
  const NextListening({Key? key}) : super(key: key);
  _WidgetState createState() => _WidgetState();
}

class _WidgetState extends State<NextListening> {
  List _elements = [
    {'topicName': 'Introduction', 'group': 'Welcome to Listening DET'},
    {'topicName': 'Requirements', 'group': 'Welcome to Listening DET'},
    {'topicName': 'Tips and tricks', 'group': 'Welcome to Listening DET'},
    {'topicName': 'Sample questions', 'group': 'Welcome to Listening DET'},
    {'topicName': 'Common topics', 'group': 'Before the test'},
    {'topicName': 'How to practice?', 'group': 'Before the test'},
    {'topicName': 'Pseudo-anglicisms', 'group': 'Before the test'},
    {'topicName': 'Listen and type', 'group': 'Practice'},
    {'topicName': 'Listen and select', 'group': 'Practice'},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          toolbarHeight: 150,
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
          title: Column(
            children: <Widget>[
              Container(
                padding: EdgeInsets.fromLTRB(0, 30, 0, 0),
                child: Text("School of Languages and Machine Translation",
                    style: TextStyle(fontSize: 15, color: Colors.black)),
              ),
              Container(
                padding: EdgeInsets.fromLTRB(0, 15, 0, 30),
                child: Text("Listening: From beginner to advanced",
                    style: TextStyle(fontSize: 22, color: Colors.black)),
              ),
            ],
          ),
        ),
        body: GroupedListView<dynamic, String>(
          elements: _elements,
          groupBy: (element) => element['group'],
          groupComparator: (value1, value2) => value2.compareTo(value1),
          itemComparator: (item1, item2) =>
              item1['topicName'].compareTo(item2['topicName']),
          order: GroupedListOrder.DESC,
          // useStickyGroupSeparators: true,
          groupSeparatorBuilder: (String value) => Padding(
            padding: const EdgeInsets.all(12.0),
            child: Text(
              value,
              textAlign: TextAlign.left,
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
          ),
          itemBuilder: (c, element) {
            return Card(
              elevation: 8.0,
              margin: new EdgeInsets.symmetric(horizontal: 10.0, vertical: 6.0),
              child: Container(
                child: ListTile(
                  contentPadding:
                      EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
                  //leading: Icon(Icons.account_circle),
                  title: Text(
                    element['topicName'],
                    style: TextStyle(fontSize: 16),
                  ),
                  trailing: Icon(Icons.navigate_next),
                ),
              ),
            );
          },
        ));
  }
}
