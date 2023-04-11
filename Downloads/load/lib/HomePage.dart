import 'package:flutter/material.dart';
import "package:quizui/feed/feed.dart";
import "package:quizui/profile/profile.dart";
import "package:quizui/home/home.dart";
import "package:quizui/soon/soon.dart";

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _MyAppState();
}

class _MyAppState extends State<HomePage> {
  int _paginaActual = 0;

  List<Widget> _paginas = [
    Feed(),
    Home(),
    Soon(),
    Profile(),
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        title: "Dulingo",
        home: Scaffold(
          appBar: null,
          body: _paginas[_paginaActual],
          bottomNavigationBar: BottomNavigationBar(
            onTap: (index) {
              setState(() {
                _paginaActual = index;
              });
            },
            currentIndex: _paginaActual,
            items: [
              BottomNavigationBarItem(
                  icon: Icon(Icons.home, color: Colors.orange),
                  label: "Courses"),
              BottomNavigationBarItem(
                  icon: Icon(Icons.school, color: Colors.orange),
                  label: "Study"),
              BottomNavigationBarItem(
                  icon: Icon(Icons.rocket, color: Colors.orange),
                  label: "Soon"),
              BottomNavigationBarItem(
                  icon: Icon(Icons.person, color: Colors.orange),
                  label: "Profile"),
            ],
          ),
        ));
  }
}
