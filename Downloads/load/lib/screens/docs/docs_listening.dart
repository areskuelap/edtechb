import 'package:flutter/material.dart';
import 'package:flutter_pdfview/flutter_pdfview.dart';
import 'package:http/http.dart' as http;
import 'dart:io';
import 'package:path_provider/path_provider.dart';

class PDFViewerPage extends StatefulWidget {
  final String url;
  const PDFViewerPage({Key? key, required this.url}) : super(key: key);

  @override
  _PDFViewerPageState createState() => _PDFViewerPageState();
}

class _PDFViewerPageState extends State<PDFViewerPage> {
  String? localPath;

  @override
  void initState() {
    super.initState();
    _downloadPDF();
  }

  Future<void> _downloadPDF() async {
    final response = await http.get(Uri.parse(widget.url));

    final directory = await getApplicationDocumentsDirectory();
    final file = File('${directory.path}/temp.pdf');
    await file.writeAsBytes(response.bodyBytes);

    setState(() {
      localPath = file.path;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('PDF Viewer')),
      body: Stack(
        children: [
          if (localPath != null)
            PDFView(
              filePath: localPath!,
              enableSwipe: true,
              swipeHorizontal: true,
              autoSpacing: false,
              pageFling: false,
              onRender: (pages) {
                setState(() {});
              },
              onViewCreated: (pdfViewController) {},
              onPageChanged: (page, total) {},
              onError: (error) {
                print(error);
              },
              onPageError: (page, error) {
                print('$page: ${error.toString()}');
              },
            ),
          if (localPath == null)
            const Center(child: CircularProgressIndicator()),
        ],
      ),
    );
  }
}
