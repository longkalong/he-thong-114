import os
import qrcode

def generate_qr(phone_number, filename):
    # Standardize phone number by removing dots
    clean_phone = phone_number.replace(".", "").strip()
    qr_data = f"tel:{clean_phone}"
    
    # Configure QR code properties
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(qr_data)
    qr.make(fit=True)
    
    # Generate image
    img = qr.make_image(fill_color="black", back_color="white")
    
    # Ensure directory exists
    os.makedirs("qrcodes", exist_ok=True)
    
    # Save image
    img_path = os.path.join("qrcodes", filename)
    img.save(img_path)
    print(f"Generated QR code for {phone_number} -> {img_path}")

if __name__ == "__main__":
    # Commanders
    generate_qr("0333.668.559", "qr_chief_0.png")
    generate_qr("0904.690.482", "qr_chief_1.png")
    
    # Officers
    generate_qr("036.8118.999", "qr_officer_0.png")
    generate_qr("0988.612.374", "qr_officer_1.png")
    generate_qr("0898.096.114", "qr_officer_2.png")
    generate_qr("08882.79.882", "qr_officer_3.png")
