import 'package:flutter/material.dart';

class Soon extends StatefulWidget {
  @override
  _CustomFormState createState() => _CustomFormState();
}

class _CustomFormState extends State<Soon> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _countryController = TextEditingController();
  final TextEditingController _featuresController = TextEditingController();

  @override
  void dispose() {
    _nameController.dispose();
    _emailController.dispose();
    _countryController.dispose();
    _featuresController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.only(top: 32),
        child: SingleChildScrollView(
          child: Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: EdgeInsets.fromLTRB(16, 40, 16, 22),
                  child: Text(
                    "Apply to try our AI powered tutor",
                    style: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                        color: Colors.orange),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
                  child: Text(
                    "Users who fill out this form will be the first to try Twilio, an AI powered tutor who will teach you live classes and check out your English writing, speaking and listening skills",
                    style: TextStyle(fontSize: 16),
                  ),
                ),
                _buildTextField(
                  labelText: "Name",
                  controller: _nameController,
                ),
                _buildTextField(
                  labelText: "Email Address",
                  controller: _emailController,
                ),
                _buildTextField(
                  labelText: "Country",
                  controller: _countryController,
                ),
                _buildTextField(
                  labelText: "Which other features do you want to see?",
                  controller: _featuresController,
                  minLines: 3,
                  alignLabelWithHint: true,
                ),
                Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
                  child: Center(
                    child: Container(
                      width: 200, // Set the width of the button
                      height: 50, // Set the height of the button
                      child: ElevatedButton(
                        onPressed: () {
                          if (_formKey.currentState!.validate()) {
                            // Process the form data
                          }
                        },
                        style: ElevatedButton.styleFrom(
                          primary: Colors.orange,
                        ),
                        child: Text('Submit'),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildTextField({
    required String labelText,
    required TextEditingController controller,
    int? minLines,
    bool? alignLabelWithHint,
  }) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: TextFormField(
        controller: controller,
        decoration: InputDecoration(
          border: OutlineInputBorder(),
          labelText: labelText,
          alignLabelWithHint: alignLabelWithHint ?? false,
        ),
        minLines: minLines,
        maxLines: minLines ?? 1,
        validator: (value) {
          if (value == null || value.isEmpty) {
            return 'Please enter some text';
          }
          return null;
        },
      ),
    );
  }
}
