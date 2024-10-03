const Contact = mongoose.model('Contact', {
    name: String,
    email: String,
    phone: String,
    message: String
  });

  const Contact = mongoose.model('Contact', {
    name: String,
    email: String,
    phone: String,
    message: String,
    subject: String,
    date: { type: Date, default: Date.now },
    status: { type: String, default: 'Pending' }
  });
  