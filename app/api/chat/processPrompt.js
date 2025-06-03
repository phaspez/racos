const data =
	"\
Trường Công nghệ Thông tin và Truyền thông\
    1. Tên ngành: Truyền thông đa phương tiện, Mã ngành: 7320104, Tổ hợp: A00, A01, D01, TH3, Điểm chuẩn học bạ: 28,30, Điểm chuẩn THPT: 24,94, Chỉ tiêu: 100, Học phí: 660,000 đ/1TC\
    2. Tên ngành: Khoa học máy tính, Mã ngành: 7480101, Tổ hợp: A00, A01, TH1, TH2, Điểm chuẩn học bạ: 28,25, Điểm chuẩn THPT: 24,43, Chỉ tiêu: 80, Học phí: 660,000 đ/1TC\
    3. Tên ngành: Mạng máy tính và truyền thông dữ liệu, Mã ngành: 7480102, Tổ hợp: A00, A01, TH1, TH2, Điểm chuẩn học bạ: 27, Điểm chuẩn THPT: 22,90, Chỉ tiêu: 80, Học phí: 660,000 đ/1TC\
    4. Tên ngành: Kỹ thuật phần mềm, Mã ngành: 7480103, Tổ hợp: A00, A01, TH1, TH2, Điểm chuẩn học bạ: 28,25, Điểm chuẩn THPT: 24,83, Chỉ tiêu: 80, Học phí: 660,000 đ/1TC\
    5. Tên ngành: Hệ thống thông tin, Mã ngành: 7480104, Tổ hợp: A00, A01, TH1, TH2, Điểm chuẩn học bạ: 27, Điểm chuẩn THPT: 23,48, Chỉ tiêu: 80, Học phí: 660,000 đ/1TC\
    6. Tên ngành: Công nghệ thông tin, Mã ngành: 7480201, Tổ hợp: A00, A01, TH1, TH2, Điểm chuẩn học bạ: 28,6, Điểm chuẩn THPT: 25,35, Chỉ tiêu: 100, Học phí: 660,000 đ/1TC\
    7. Tên ngành: Công nghệ thông tin - Hòa An (**), Mã ngành: 7480201H, Tổ hợp: A00, A01, TH1, TH2, Điểm chuẩn học bạ: 26,20, Điểm chuẩn THPT: 23,05, Chỉ tiêu: 40, Học phí: 660,000 đ/1TC\
    8. Tên ngành: An toàn thông tin, Mã ngành: 7480202, Tổ hợp: A00, A01, TH1, TH2, Điểm chuẩn học bạ: 27,50, Điểm chuẩn THPT: 23,75, Chỉ tiêu: 60, Học phí: 660,000 đ/1TC\
\
Trường Bách Khoa\
    1. Tên ngành: Công nghệ kỹ thuật hóa học, Mã ngành: 7510401, Tổ hợp: A00, B00, D07, Điểm chuẩn học bạ: 27,80, Điểm chuẩn THPT: 24,50, Chỉ tiêu: 120, Học phí: 690,000 đ/1TC\
    2. Tên ngành: Công nghệ kỹ thuật hóa học (chương trình chất lượng cao), Mã ngành: 7510401C, Tổ hợp: A00, B00, D07, Điểm chuẩn học bạ: 26,90, Điểm chuẩn THPT: 23,70, Chỉ tiêu: 50, Học phí: 960,000 đ/1TC\
    3. Tên ngành: Kiến trúc, Mã ngành: 7580101, Tổ hợp: V00, V01, D01, Điểm chuẩn học bạ: 28,10, Điểm chuẩn THPT: 25,20, Chỉ tiêu: 80, Học phí: 720,000 đ/1TC\
    4. Tên ngành: Kỹ thuật cơ khí - Cơ khí chế tạo máy, Mã ngành: 7520103, Tổ hợp: A00, A01, D01, Điểm chuẩn học bạ: 27,00, Điểm chuẩn THPT: 23,80, Chỉ tiêu: 100, Học phí: 690,000 đ/1TC\
    5. Tên ngành: Kỹ thuật cơ điện tử, Mã ngành: 7520114, Tổ hợp: A00, A01, D01, Điểm chuẩn học bạ: 28,40, Điểm chuẩn THPT: 24,90, Chỉ tiêu: 90, Học phí: 690,000 đ/1TC\
    6. Tên ngành: Kỹ thuật máy tính - Thiết kế vi mạch bán dẫn, Mã ngành: 7480106, Tổ hợp: A00, A01, D01, Điểm chuẩn học bạ: 28,70, Điểm chuẩn THPT: 25,30, Chỉ tiêu: 70, Học phí: 690,000 đ/1TC\
    7. Tên ngành: Kỹ thuật ô tô, Mã ngành: 7520130, Tổ hợp: A00, A01, D01, Điểm chuẩn học bạ: 28,00, Điểm chuẩn THPT: 24,70, Chỉ tiêu: 80, Học phí: 690,000 đ/1TC\
    8. Tên ngành: Kỹ thuật vật liệu, Mã ngành: 7520309, Tổ hợp: A00, B00, D07, Điểm chuẩn học bạ: 26,50, Điểm chuẩn THPT: 22,90, Chỉ tiêu: 60, Học phí: 690,000 đ/1TC\
    9. Tên ngành: Kỹ thuật xây dựng, Mã ngành: 7580201, Tổ hợp: A00, A01, D01, Điểm chuẩn học bạ: 27,20, Điểm chuẩn THPT: 23,90, Chỉ tiêu: 90, Học phí: 690,000 đ/1TC \
"

function processPrompt(prompt) {
	return `Bạn tên là CAAS. Hãy trở thành chuyên gia tư vấn tuyển sinh cho trường Đại học Cần Thơ. Luôn mở đầu câu trả lời bằng giới thiệu bản thân. \
    Câu hỏi của người dùng: ${prompt}\nTrả lời câu hỏi dựa vào các thông tin về ngành dưới đây: ${data}. \
    Trả lời đúng câu hỏi. Với những câu hỏi kiến thức phổ cập có liên quan thỉ trả lời tự do. Nếu không có thông tin thì trả lời: 'Thông tin đang được cập nhật, vui lòng xem chi tiết tại: https://tuyensinh.ctu.edu.vn/', \
    không được đưa ra thông tin sai`
}

export default processPrompt
