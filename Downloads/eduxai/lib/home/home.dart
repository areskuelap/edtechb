import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:carousel_slider/carousel_slider.dart';
import "package:quizui/screens/next/next_describe.dart";
import "package:quizui/screens/next/next_listening.dart";
import "package:quizui/screens/next/next_writing.dart";
import "package:quizui/screens/next/next_select.dart";
import "package:quizui/screens/next/next_gpt.dart";

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);
  @override
  State<Home> createState() => _MyAppState();
}

class _MyAppState extends State<Home> {
  int _currentIndex = 0;
  List cardList = [Item1(), Item2(), Item3(), Item4(), Itemuno()];
  List lista = [Item5(), Item6(), Item7()];

  List<T> map<T>(List list, Function handler) {
    List<T> result = [];
    for (var i = 0; i < list.length; i++) {
      result.add(handler(i, list[i]));
    }
    return result;
  }

  bool isVisible = false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: null,
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Container(
                padding: EdgeInsets.fromLTRB(30, 60, 0, 0),
                child: Text("Learn",
                    style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.bold,
                        color: Color(0xff3d3a3a)))),
            Container(
                padding: EdgeInsets.fromLTRB(30, 20, 0, 0),
                child: Text("Keep learning to progress",
                    style: TextStyle(fontSize: 15, color: Color(0xff242323)))),
            SizedBox(height: 15),
            Container(
                padding: EdgeInsets.fromLTRB(30, 20, 0, 0),
                child: Text("Complete Duolingo English Test course",
                    style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Color(0xff3d3a3a)))),
            Container(
                padding: EdgeInsets.fromLTRB(30, 10, 0, 20),
                child: Text("By School of Languages and Machine Translation",
                    style: TextStyle(fontSize: 15, color: Color(0xff242323)))),
            CarouselSlider(
              options: CarouselOptions(
                height: 200.0,
                autoPlay: true,
                autoPlayInterval: Duration(seconds: 5),
                autoPlayAnimationDuration: Duration(milliseconds: 800),
                autoPlayCurve: Curves.fastOutSlowIn,
                pauseAutoPlayOnTouch: true,
                aspectRatio: 2.0,
                onPageChanged: (index, reason) {
                  setState(() {
                    _currentIndex = index;
                  });
                },
              ),
              items: cardList.map((card) {
                return Builder(builder: (BuildContext context) {
                  return Container(
                    height: MediaQuery.of(context).size.height * 0.30,
                    width: MediaQuery.of(context).size.width,
                    child: Card(
                      color: Colors.blueAccent,
                      child: card,
                    ),
                  );
                });
              }).toList(),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: map<Widget>(cardList, (index, url) {
                return Container(
                  width: 10.0,
                  height: 10.0,
                  margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 2.0),
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: _currentIndex == index
                        ? Colors.blueAccent
                        : Colors.grey,
                  ),
                );
              }),
            ),
            SizedBox(height: 15),
            Container(
                padding: EdgeInsets.fromLTRB(30, 20, 0, 0),
                child: Text("Artificial Intelligence for teachers",
                    style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Color(0xff3d3a3a)))),
            Container(
                padding: EdgeInsets.fromLTRB(30, 10, 0, 20),
                child: Text("By School of Applied Artificial Intelligence",
                    style: TextStyle(fontSize: 15, color: Color(0xff242323)))),
            CarouselSlider(
              options: CarouselOptions(
                height: 200.0,
                autoPlay: true,
                autoPlayInterval: Duration(seconds: 3),
                autoPlayAnimationDuration: Duration(milliseconds: 800),
                autoPlayCurve: Curves.fastOutSlowIn,
                pauseAutoPlayOnTouch: true,
                aspectRatio: 2.0,
                onPageChanged: (index, reason) {
                  setState(() {
                    _currentIndex = index;
                  });
                },
              ),
              items: lista.map((card) {
                return Builder(builder: (BuildContext context) {
                  return Container(
                    height: MediaQuery.of(context).size.height * 0.30,
                    width: MediaQuery.of(context).size.width,
                    child: Card(
                      color: Colors.blueAccent,
                      child: card,
                    ),
                  );
                });
              }).toList(),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: map<Widget>(lista, (index, url) {
                return Container(
                  width: 10.0,
                  height: 10.0,
                  margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 2.0),
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: _currentIndex == index
                        ? Colors.blueAccent
                        : Colors.grey,
                  ),
                );
              }),
            ),
          ],
        ),
      ),
    );
  }
}

class Itemuno extends StatelessWidget {
  const Itemuno({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            stops: [
              0.3,
              1
            ],
            colors: [
              Color(0xffffffff),
              Color(0xffffffff),
            ]),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Container(
            padding: EdgeInsets.fromLTRB(20, 10, 0, 10),
            child: Text("Prompts generated by Twilio",
                style: TextStyle(
                    color: Color(0xff2b2a2a),
                    fontSize: 22.0,
                    fontWeight: FontWeight.bold)),
          ),
          Container(
            padding: EdgeInsets.fromLTRB(20, 0, 0, 0),
            child: Text("See these prompts generated by our AI",
                style: TextStyle(
                    color: Color(0xff000000),
                    fontSize: 15.0,
                    fontWeight: FontWeight.w600)),
          ),
          SizedBox(
            height: 10,
          ),
          ElevatedButton(
            child: Text("Join"),
            onPressed: () {
              Navigator.of(context)
                  .push(MaterialPageRoute(builder: (context) => NextGpt()));
            },
            style: ButtonStyle(
              backgroundColor: MaterialStateProperty.all(
                Color(0xfff9930d),
              ),
              fixedSize: MaterialStateProperty.all(Size(120, 40)),
            ),
          )
        ],
      ),
    );
  }
}

class Item1 extends StatelessWidget {
  const Item1({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            stops: [
              0.3,
              1
            ],
            colors: [
              Color(0xffffffff),
              Color(0xffffffff),
            ]),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Container(
            padding: EdgeInsets.fromLTRB(20, 10, 0, 10),
            child: Text("Listenig: From Beginner to advanced",
                style: TextStyle(
                    color: Color(0xff2b2a2a),
                    fontSize: 22.0,
                    fontWeight: FontWeight.bold)),
          ),
          Container(
            padding: EdgeInsets.fromLTRB(20, 0, 0, 0),
            child: Text("Learn how to hack every single question in the test.",
                style: TextStyle(
                    color: Color(0xff000000),
                    fontSize: 15.0,
                    fontWeight: FontWeight.w600)),
          ),
          SizedBox(
            height: 10,
          ),
          ElevatedButton(
            child: Text("Join"),
            onPressed: () {
              Navigator.of(context).push(
                  MaterialPageRoute(builder: (context) => NextListening()));
            },
            style: ButtonStyle(
              backgroundColor: MaterialStateProperty.all(
                Color(0xfff9930d),
              ),
              fixedSize: MaterialStateProperty.all(Size(120, 40)),
            ),
          )
        ],
      ),
    );
  }
}

class Item2 extends StatelessWidget {
  const Item2({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            stops: [0.3, 1],
            colors: [Color(0xffffffff), Color(0xffffffff)]),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Container(
            padding: EdgeInsets.fromLTRB(20, 10, 0, 10),
            child: Text("Literacy: From Beginner to advanced",
                style: TextStyle(
                    color: Color(0xff2b2a2a),
                    fontSize: 22.0,
                    fontWeight: FontWeight.bold)),
          ),
          Container(
            padding: EdgeInsets.fromLTRB(20, 0, 0, 0),
            child: Text("Learn how to hack every single question in the test.",
                style: TextStyle(
                    color: Color(0xff000000),
                    fontSize: 15.0,
                    fontWeight: FontWeight.w600)),
          ),
          SizedBox(
            height: 10,
          ),
          ElevatedButton(
            child: Text("Join"),
            onPressed: () {
              Navigator.of(context)
                  .push(MaterialPageRoute(builder: (context) => NextSelect()));
            },
            style: ButtonStyle(
              backgroundColor: MaterialStateProperty.all(
                Color(0xfff9930d),
              ),
              fixedSize: MaterialStateProperty.all(Size(120, 40)),
            ),
          )
        ],
      ),
    );
  }
}

class Item3 extends StatelessWidget {
  const Item3({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            stops: [
              0.3,
              1
            ],
            colors: [
              Color(0xffffffff),
              Color(0xffffffff),
            ]),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Container(
            padding: EdgeInsets.fromLTRB(20, 10, 0, 10),
            child: Text("Comprehension: From Beginner to advanced",
                style: TextStyle(
                    color: Color(0xff2b2a2a),
                    fontSize: 22.0,
                    fontWeight: FontWeight.bold)),
          ),
          Container(
            padding: EdgeInsets.fromLTRB(20, 0, 0, 0),
            child: Text("Learn how to hack every single question in the test.",
                style: TextStyle(
                    color: Color(0xff000000),
                    fontSize: 15.0,
                    fontWeight: FontWeight.w600)),
          ),
          SizedBox(
            height: 10,
          ),
          ElevatedButton(
            child: Text("Join"),
            onPressed: () {
              Navigator.of(context).push(
                  MaterialPageRoute(builder: (context) => NextDescribe()));
            },
            style: ButtonStyle(
              backgroundColor: MaterialStateProperty.all(
                Color(0xfff9930d),
              ),
              fixedSize: MaterialStateProperty.all(Size(120, 40)),
            ),
          )
        ],
      ),
    );
  }
}

class Item4 extends StatelessWidget {
  const Item4({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            stops: [
              0.3,
              1
            ],
            colors: [
              Color(0xffffffff),
              Color(0xffffffff),
            ]),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Container(
            padding: EdgeInsets.fromLTRB(20, 10, 0, 10),
            child: Text("Writing: An in-depth view",
                style: TextStyle(
                    color: Color(0xff2b2a2a),
                    fontSize: 22.0,
                    fontWeight: FontWeight.bold)),
          ),
          Container(
            padding: EdgeInsets.fromLTRB(20, 0, 0, 0),
            child: Text("Get ready for the ",
                style: TextStyle(
                    color: Color(0xff000000),
                    fontSize: 15.0,
                    fontWeight: FontWeight.w600)),
          ),
          SizedBox(
            height: 10,
          ),
          ElevatedButton(
            child: Text("Join"),
            onPressed: () {
              Navigator.of(context)
                  .push(MaterialPageRoute(builder: (context) => NextReading()));
            },
            style: ButtonStyle(
              backgroundColor: MaterialStateProperty.all(
                Color(0xfff9930d),
              ),
              fixedSize: MaterialStateProperty.all(Size(120, 40)),
            ),
          )
        ],
      ),
    );
  }
}

class Item5 extends StatelessWidget {
  const Item5({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            stops: [
              0.3,
              1
            ],
            colors: [
              Color(0xffffffff),
              Color(0xffffffff),
            ]),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Container(
            padding: EdgeInsets.fromLTRB(20, 10, 0, 10),
            child: Text("Plagiarism checker",
                style: TextStyle(
                    color: Color(0xff2b2a2a),
                    fontSize: 22.0,
                    fontWeight: FontWeight.bold)),
          ),
          Container(
            padding: EdgeInsets.fromLTRB(20, 0, 0, 0),
            child: Text(
                "Use the latest advancements to detect AI generated texts",
                style: TextStyle(
                    color: Color(0xff000000),
                    fontSize: 15.0,
                    fontWeight: FontWeight.w600)),
          ),
          SizedBox(
            height: 10,
          ),
          ElevatedButton(
            child: Text("Join"),
            onPressed: () {
              Navigator.of(context).push(
                  MaterialPageRoute(builder: (context) => NextListening()));
            },
            style: ButtonStyle(
              backgroundColor: MaterialStateProperty.all(
                Color(0xfff9930d),
              ),
              fixedSize: MaterialStateProperty.all(Size(120, 40)),
            ),
          )
        ],
      ),
    );
  }
}

class Item6 extends StatelessWidget {
  const Item6({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            stops: [0.3, 1],
            colors: [Color(0xffffffff), Color(0xffffffff)]),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Container(
            padding: EdgeInsets.fromLTRB(20, 10, 0, 10),
            child: Text("Assesing students performance",
                style: TextStyle(
                    color: Color(0xff2b2a2a),
                    fontSize: 22.0,
                    fontWeight: FontWeight.bold)),
          ),
          Container(
            padding: EdgeInsets.fromLTRB(20, 0, 0, 0),
            child: Text(
                "Use artificial intelligence to analize every single detail of your students performance",
                style: TextStyle(
                    color: Color(0xff000000),
                    fontSize: 15.0,
                    fontWeight: FontWeight.w600)),
          ),
          SizedBox(
            height: 10,
          ),
          ElevatedButton(
            child: Text("Join"),
            onPressed: () {
              Navigator.of(context)
                  .push(MaterialPageRoute(builder: (context) => NextSelect()));
            },
            style: ButtonStyle(
              backgroundColor: MaterialStateProperty.all(
                Color(0xfff9930d),
              ),
              fixedSize: MaterialStateProperty.all(Size(120, 40)),
            ),
          )
        ],
      ),
    );
  }
}

class Item7 extends StatelessWidget {
  const Item7({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            stops: [
              0.3,
              1
            ],
            colors: [
              Color(0xffffffff),
              Color(0xffffffff),
            ]),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Container(
            padding: EdgeInsets.fromLTRB(20, 10, 0, 10),
            child: Text("Prompt writing: an art",
                style: TextStyle(
                    color: Color(0xff2b2a2a),
                    fontSize: 22.0,
                    fontWeight: FontWeight.bold)),
          ),
          Container(
            padding: EdgeInsets.fromLTRB(20, 0, 0, 0),
            child: Text("Learn to write prompts to get out t",
                style: TextStyle(
                    color: Color(0xff000000),
                    fontSize: 15.0,
                    fontWeight: FontWeight.w600)),
          ),
          SizedBox(
            height: 10,
          ),
          ElevatedButton(
            child: Text("Join"),
            onPressed: () {
              Navigator.of(context).push(
                  MaterialPageRoute(builder: (context) => NextDescribe()));
            },
            style: ButtonStyle(
              backgroundColor: MaterialStateProperty.all(
                Color(0xfff9930d),
              ),
              fixedSize: MaterialStateProperty.all(Size(120, 40)),
            ),
          )
        ],
      ),
    );
  }
}
