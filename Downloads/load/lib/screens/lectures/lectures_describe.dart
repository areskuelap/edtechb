import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class LecturesDescribe extends StatefulWidget {
  @override
  _VideoPlayerScreenState createState() => _VideoPlayerScreenState();
}

class _VideoPlayerScreenState extends State<LecturesDescribe> {
  late VideoPlayerController _controller;
  late Future<void> _initializeVideoPlayerFuture;
  List<String> _videoUrls = [
    'https://luya.blob.core.windows.net/test/20230323_191155.mp4',
    'https://luya.blob.core.windows.net/test/20230323_191155.mp4',
    'https://luya.blob.core.windows.net/test/20230323_191155.mp4',
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
                return AspectRatio(
                  aspectRatio: _controller.value.aspectRatio,
                  child: VideoPlayer(_controller),
                );
              } else {
                return Center(child: CircularProgressIndicator());
              }
            },
          ),
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
          DropdownButton<String>(
            value: _selectedVideoUrl,
            onChanged: (String? newValue) {
              setState(() {
                _selectedVideoUrl = newValue!;
                _controller.pause();
                _controller = VideoPlayerController.network(_selectedVideoUrl!);
                _initializeVideoPlayerFuture = _controller.initialize();
              });
            },
            items: _videoUrls.map<DropdownMenuItem<String>>((String value) {
              return DropdownMenuItem<String>(
                value: value,
                child: Text(""),
              );
            }).toList(),
          ),
        ],
      ),
    );
  }
}
