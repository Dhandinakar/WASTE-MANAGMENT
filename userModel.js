//User Model: This model stores user information (e.g., name, contact details, etc.).

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
  });
  
  const User = mongoose.model('User', userSchema);
  