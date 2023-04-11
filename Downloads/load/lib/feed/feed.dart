import 'package:flutter/material.dart';
import "package:quizui/home/home.dart";

class Feed extends StatefulWidget {
  const Feed({Key? key}) : super(key: key);

  @override
  State<Feed> createState() => _FeedState();
}

class _FeedState extends State<Feed> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(16, 40, 16, 32),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Explore Courses',
                  style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 16),
                TextField(
                  decoration: InputDecoration(
                    hintText: 'Search courses',
                    border: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.orange),
                    ),
                    suffixIcon: Icon(
                      Icons.search,
                      color: Colors.orange,
                    ),
                  ),
                ),
                SizedBox(height: 32),
                Column(
                  children: [
                    GestureDetector(
                      onTap: () {
                        Navigator.of(context).push(
                            MaterialPageRoute(builder: (context) => Home()));
                      },
                      child: CourseCard(
                        imageUrl:
                            'https://detpractice-tadehub.com/storage/blog/the-practice-test-explanation/duolingo-practice-estimated-score.png',
                        title: 'Duolingo English Test Full Course',
                        rating: 4.5,
                        timeToComplete: '20 hours',
                      ),
                    ),
                    SizedBox(height: 32),
                    CourseCard(
                      imageUrl:
                          'https://cdn-assets.inwink.com/8351455e-9a61-ec11-94f6-a04a5e7cd2d9-public/assets/pictures/AI_WIPS_2022_square.png',
                      title: 'Artificial Intelligence tools for everybody',
                      rating: 4.2,
                      timeToComplete: '35 hours',
                    ),
                    SizedBox(height: 32),
                    CourseCard(
                      imageUrl:
                          'https://wethegeek.com/wp-content/uploads/2021/06/Google-workspace.jpg',
                      title:
                          'Especialización en Google Workspace con Inteligencia Artificial',
                      rating: 4.8,
                      timeToComplete: '2 hours',
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class CourseCard extends StatelessWidget {
  final String imageUrl;
  final String title;
  final double rating;
  final String timeToComplete;

  const CourseCard({
    Key? key,
    required this.imageUrl,
    required this.title,
    required this.rating,
    required this.timeToComplete,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(
        side: BorderSide(color: Color(0xfff2f2f2), width: 2),
        borderRadius: BorderRadius.circular(5),
      ),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Row(
          children: [
            SizedBox(
              width: 100,
              height: 100,
              child: Image.network(
                imageUrl,
                fit: BoxFit.cover,
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
            SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.orange),
                  ),
                  SizedBox(height: 4),
                  Row(
                    children: [
                      Icon(
                        Icons.star,
                        color: Color(0xff1468ae),
                        size: 16,
                      ),
                      SizedBox(width: 4),
                      Tooltip(
                        message: 'Rating: $rating',
                        child: Text('$rating'),
                      ),
                    ],
                  ),
                  SizedBox(height: 4),
                  Row(
                    children: [
                      Icon(
                        Icons.timer,
                        color: Colors.green,
                        size: 16,
                      ),
                      SizedBox(width: 4),
                      Tooltip(
                        message: 'Time: $timeToComplete',
                        child: Text('$timeToComplete'),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
