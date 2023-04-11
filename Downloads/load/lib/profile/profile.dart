import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import "package:quizui/profile/notifications/nots.dart";
import 'package:url_launcher/url_launcher.dart';

class Profile extends StatefulWidget {
  const Profile({Key? key}) : super(key: key);

  @override
  State<Profile> createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  final double _fontSize = 16;

  Future<void> _sendEmail() async {
    final Uri emailLaunchUri = Uri(
      scheme: 'mailto',
      path: 'contact@konlap.com',
    );

    if (await canLaunch(emailLaunchUri.toString())) {
      await launch(emailLaunchUri.toString());
    } else {
      throw 'Could not launch email client';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        title: const Text(
          'Profile',
          style: TextStyle(color: Colors.orange),
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.notifications, color: Colors.orange),
            onPressed: () {
              Navigator.of(context).push(MaterialPageRoute(
                  builder: (context) => Nots())); // Implement bell icon action
            },
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 32.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 16),
            Center(
              child: CircleAvatar(
                backgroundImage: NetworkImage(
                    'https://media.licdn.com/dms/image/D4E03AQHiDYPnbICz-g/profile-displayphoto-shrink_800_800/0/1665877551818?e=2147483647&v=beta&t=B2_Ofl-o692oFcv6LY-HUwQy-cLbSCfKOtHRjTrTGUA'),
                radius: 50,
              ),
            ),
            const SizedBox(height: 16),
            Center(
              child: Text(
                'Héctor Díaz',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
            ),
            const SizedBox(height: 20),
            Row(
              children: [
                const Icon(Icons.email, color: Colors.blue),
                const SizedBox(width: 8),
                Text('contact@konlap.com',
                    style: TextStyle(fontSize: _fontSize)),
              ],
            ),
            const SizedBox(height: 8),
            Row(
              children: [
                const Icon(Icons.date_range, color: Colors.green),
                const SizedBox(width: 8),
                Text('Joined: 01-01-2023',
                    style: TextStyle(fontSize: _fontSize)),
              ],
            ),
            const SizedBox(height: 36),
            Container(
                child: Text("General Settings",
                    style:
                        TextStyle(fontSize: 18, fontWeight: FontWeight.w500))),
            const SizedBox(height: 10),
            Divider(),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8.0),
              child: ListTile(
                leading: const Icon(Icons.exit_to_app, color: Colors.red),
                title: Text('Close session',
                    style: TextStyle(fontSize: _fontSize)),
                onTap: () {
                  // Implement close session logic
                },
              ),
            ),
            Divider(),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8.0),
              child: ListTile(
                leading:
                    const Icon(Icons.contact_support, color: Colors.deepPurple),
                title:
                    Text('Contact us', style: TextStyle(fontSize: _fontSize)),
                onTap: _sendEmail,
              ),
            ),
            Divider(),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8.0),
              child: ListTile(
                leading: const Icon(Icons.language, color: Colors.blueAccent),
                title: Text('Language configuration',
                    style: TextStyle(fontSize: _fontSize)),
                onTap: () {
                  // Implement language configuration
                },
              ),
            ),
            Divider(),
          ],
        ),
      ),
    );
  }
}
