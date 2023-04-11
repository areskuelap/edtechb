import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class LecturesListening extends StatefulWidget {
  @override
  _VideoPlayerScreenState createState() => _VideoPlayerScreenState();
}

class _VideoPlayerScreenState extends State<LecturesListening> {
  late VideoPlayerController _controller;
  late Future<void> _initializeVideoPlayerFuture;
  List<String> _videoUrls = [
    'https://luya.blob.core.windows.net/test/20230323_191155.mp4',
    'https://tinyurl.com/y88zasxc',
    'https://luya.blob.core.windows.net/test/20230323_191155.mp4',
  ];

  List<String> _titlesU = [
    "Listening section explained",
    "Best practices",
    "New things to do"
  ];

  String? _selectedVideoUrl;

  @override
  void initState() {
    super.initState();
    _selectedVideoUrl = _videoUrls.first;
    _controller = VideoPlayerController.network(_selectedVideoUrl!);
    _initializeVideoPlayerFuture = _controller.initialize();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Video Player'),
        backgroundColor: Color(0xfff9930d),
      ),
      body: Column(
        children: [
          FutureBuilder(
            future: _initializeVideoPlayerFuture,
            builder: (context, snapshot) {
              if (snapshot.connectionState == ConnectionState.done) {
                return Container(
                  height: 250, // Set the fixed height
                  width: double.infinity, // Set the fixed width
                  padding: const EdgeInsets.only(top: 20, left: 8, right: 8),
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.orange, width: 2),
                  ),
                  child: AspectRatio(
                    aspectRatio: _controller.value.aspectRatio,
                    child: VideoPlayer(_controller),
                  ),
                );
              } else {
                return Center(child: CircularProgressIndicator());
              }
            },
          ),
          SizedBox(height: 10), // Add space below the video
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text('Select your video: '),
              SizedBox(width: 8), // Add space between text and selector
              Expanded(
                child: DropdownButton<String>(
                  isExpanded:
                      true, // To make sure the DropdownButton takes the full available width
                  value: _selectedVideoUrl,
                  onChanged: (String? newValue) {
                    setState(() {
                      _selectedVideoUrl = newValue!;
                      _controller.pause();
                      _controller =
                          VideoPlayerController.network(_selectedVideoUrl!);
                      _initializeVideoPlayerFuture = _controller.initialize();
                    });
                  },
                  items: _videoUrls
                      .asMap()
                      .entries
                      .map<DropdownMenuItem<String>>((entry) {
                    return DropdownMenuItem<String>(
                      value: entry.value,
                      child: Text(_titlesU[entry.key]),
                    );
                  }).toList(),
                ),
              ),
            ],
          ),
          SizedBox(height: 20), // Add space below the selector
          TextButton(
            onPressed: () {
              setState(() {
                _controller.value.isPlaying
                    ? _controller.pause()
                    : _controller.play();
              });
            },
            child: Icon(
              _controller.value.isPlaying ? Icons.pause : Icons.play_arrow,
              size: 50.0,
              color: Color(0xfff9930d),
            ),
          ),
        ],
      ),
    );
  }
}
