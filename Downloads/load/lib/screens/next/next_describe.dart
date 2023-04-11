import "package:flutter/material.dart";
import "package:quizui/screens/describe.dart";
import "package:quizui/screens/describe_hard.dart";
import "package:quizui/screens/describe_medium.dart";
import "package:quizui/screens/lectures/lectures_describe.dart";
import "package:quizui/screens/next/next_describe.dart";

class NextDescribe extends StatefulWidget {
  @override
  State<NextDescribe> createState() => _CustomEdtechWidgetState();
}

class _CustomEdtechWidgetState extends State<NextDescribe> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color(0xfff9990d),
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
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: GridView.count(
          crossAxisCount: 2,
          crossAxisSpacing: 16.0,
          mainAxisSpacing: 16.0,
          children: [
            buildSectionCard(
              'Lectures',
              Icons.book,
              () => onLecturesTap(context),
            ),
            buildSectionCard(
              'Practice Tests',
              Icons.check_circle,
              () => onPracticeTestsTap(context),
            ),
            buildSectionCard(
              'Docs',
              Icons.description,
              () => onDocumentsTap(context),
            ),
          ],
        ),
      ),
    );
  }

  Card buildSectionCard(String title, IconData iconData, VoidCallback onTap) {
    return Card(
      color: Colors.white,
      child: InkWell(
        onTap: onTap,
        child: Padding(
          padding: EdgeInsets.all(24.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Icon(
                iconData,
                size: 32.0,
                color: Color(0xfff9990d),
              ),
              SizedBox(width: 16.0),
              Expanded(
                child: Text(
                  title,
                  style: TextStyle(
                    fontSize: 16.0,
                    fontWeight: FontWeight.bold,
                    color: Color(0xfff9990d),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void onLecturesTap(BuildContext context) {
    Navigator.of(context).push(MaterialPageRoute(
        builder: (context) =>
            LecturesDescribe())); // Implement your onTap method for the Lectures section
  }

  void onPracticeTestsTap(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => SimpleDialog(
        title: Text('Select Difficulty'),
        children: <Widget>[
          ListTile(
            leading: Icon(Icons.arrow_right),
            title: Text('Easy'),
            onTap: () {
              Navigator.of(context)
                  .push(MaterialPageRoute(builder: (context) => Describe()));
            },
          ),
          ListTile(
            leading: Icon(Icons.arrow_right),
            title: Text('Medium'),
            onTap: () {
              Navigator.of(context).push(
                  MaterialPageRoute(builder: (context) => DescribeMedium()));
            },
          ),
          ListTile(
            leading: Icon(Icons.arrow_right),
            title: Text('Hard'),
            onTap: () {
              Navigator.of(context).push(
                  MaterialPageRoute(builder: (context) => DescribeHard()));
            },
          ),
        ],
      ),
    );
  }

  void onDocumentsTap(BuildContext context) {
    // Implement your onTap method for the Documents section
  }

  void onEasyTap(BuildContext context) {
    // Implement your onTap method for the Easy section
    Navigator.pop(context);
  }

  void onMediumTap(BuildContext context) {
    // Implement your onTap method for the Medium section
    Navigator.pop(context);
  }

  void onHardTap(BuildContext context) {
// Implement your onTap method for the Hard section
    Navigator.pop(context);
  }
}
