import type { ImageMetadata } from 'astro';

import heroImage from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z3703316628394d8969e4bd8314c7a56b2a098adc3b844-7306.webp';
import aboutImage from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z370111060870109dbc46d17cd86d8d7fee5261e3a5bcd-8582.webp';
import aboutAccentImage from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z3690119536291e392c3ebecd7bc7a30a6f2a0d52b8dae-6412.webp';
import featuredLion from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z4146838194615194ce656febb556b2e6ef6ac84885aa6-9687.webp';
import featuredStone from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z3692453112853d8865354710ce267fd692995d804ac6f-4770.webp';
import featuredRelief from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z3690110362188b786ad65ee76e9eae979a49b7d9ec26e-5955.webp';
import featuredPortrait from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z3690129736700ae2954b6ae1057ba5022a503c1a3b0d6-9489.webp';
import featureBuddha from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z36924598346087def7833333f0b0e26df6f905c98b0ce-5387.webp';
import materialPrimaryImage from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z37032317296453ac01b93bf94d0100eac67bdef24e164-8284.webp';
import materialSecondaryImage from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z3690143392256b9b5de4508b9dd5a5730e7515bf4fc29-7467.webp';
import galleryBuddhaClay from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z370111060870109dbc46d17cd86d8d7fee5261e3a5bcd-8582.webp';
import galleryBuddhaStone from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z36924598346087def7833333f0b0e26df6f905c98b0ce-9071.webp';
import galleryQuanAm from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z3697798591471a612265100c8a6479af9e196e6bc1651-5773.webp';
import galleryWarrior from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z41468742312009588b114ca91ad69221ea5ac29d4fa89-4540.webp';
import galleryReliefWide from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z3690143392256b9b5de4508b9dd5a5730e7515bf4fc29-7467.webp';
import galleryReliefTree from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z3690110362188b786ad65ee76e9eae979a49b7d9ec26e-5955.webp';
import galleryPortraitBust from '../../draft-tuongphatvannhan/tuong_phat_van_nhan-data/z3690119536291e392c3ebecd7bc7a30a6f2a0d52b8dae-6412.webp';

export interface NavLink {
  label: string;
  href: string;
}

export interface ArtworkItem {
  title: string;
  category: string;
  description: string;
  image: ImageMetadata;
  alt: string;
  badge?: string;
}

export interface CategoryItem {
  title: string;
  description: string;
}

export interface MaterialItem {
  title: string;
  description: string;
  detail: string;
}

export interface GalleryItem {
  title: string;
  category: string;
  image: ImageMetadata;
  alt: string;
  tall?: boolean;
}

export interface TestimonialItem {
  name: string;
  meta: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const brand = {
  name: 'Điêu Khắc Văn Nhân',
  legacyName: 'Tượng Phật Văn Nhân',
  tagline: 'Sculpture atelier · thiết kế và chế tác tượng nghệ thuật',
  phone: '0914 451 405',
  email: 'tuongphatvannhan@gmail.com',
  zalo: 'https://zalo.me/0914451405',
  facebook: 'https://www.facebook.com/tuongphatvannhan',
  youtube: 'https://www.youtube.com/@tuongphatvannhan',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  hours: 'Thứ 2 – Chủ nhật · 07:00 – 19:00',
};

export const navLinks: NavLink[] = [
  { label: 'Giới thiệu', href: '#gioi-thieu' },
  { label: 'Tác phẩm', href: '#tac-pham' },
  { label: 'Danh mục', href: '#danh-muc' },
  { label: 'Chất liệu', href: '#chat-lieu' },
  { label: 'Liên hệ', href: '#lien-he' },
];

export const hero = {
  eyebrow: 'Điêu khắc nghệ thuật thủ công',
  title: 'Biến không gian thành nơi nghệ thuật hiện diện trong từng đường chạm.',
  description:
    'Điêu Khắc Văn Nhân thiết kế và chế tác tượng nghệ thuật, tượng công viên, manơcanh bảo tàng, phù điêu và các công trình phục chế với tinh thần thủ công chuẩn mực, thanh lịch và giàu chiều sâu văn hoá.',
  primaryAction: { label: 'Khám phá tác phẩm', href: '#tac-pham' },
  secondaryAction: { label: 'Nhận tư vấn riêng', href: '#lien-he' },
  image: heroImage,
  alt: 'Tượng nghệ thuật được chế tác bởi Điêu Khắc Văn Nhân',
  highlight: 'Chạm khắc thủ công · hoàn thiện tinh xảo',
  stats: [
    { value: '15+', label: 'năm kinh nghiệm' },
    { value: '500+', label: 'tác phẩm hoàn thiện' },
    { value: '100%', label: 'thi công theo yêu cầu' },
  ],
};

export const intro = {
  title: 'Giữ lại tinh thần thương hiệu cũ, mở rộng thành một không gian điêu khắc đương đại.',
  paragraphs: [
    'Từ nền tảng tay nghề của Tượng Phật Văn Nhân, thương hiệu Điêu Khắc Văn Nhân tiếp tục phát triển như một xưởng sáng tác chuyên về tượng nghệ thuật, công trình cảnh quan và các dự án phục chế giàu tính thẩm mỹ.',
    'Chúng tôi đồng hành từ khâu lên ý tưởng, phác thảo mẫu, chọn chất liệu đến hoàn thiện bề mặt — để mỗi tác phẩm không chỉ đúng công năng mà còn mang cảm xúc và giá trị trưng bày lâu dài.',
  ],
  bullets: [
    'Thiết kế tượng theo yêu cầu cho nhà ở, sân vườn, công viên và công trình văn hoá',
    'Chế tác manơcanh bảo tàng, tượng tròn, phù điêu và mô hình nghệ thuật',
    'Phục chế, sao chép và hoàn thiện tượng Phật với độ chuẩn xác cao',
  ],
  image: aboutImage,
  imageAlt: 'Nghệ nhân điêu khắc đang hoàn thiện tượng',
  accentImage: aboutAccentImage,
  accentAlt: 'Các mẫu tượng chân dung trong xưởng chế tác',
};

export const featuredWorks: ArtworkItem[] = [
  {
    title: 'Quan Âm cưỡi sư tử',
    category: 'Tượng nghệ thuật cỡ lớn',
    description: 'Tác phẩm giàu thần thái dành cho không gian tâm linh và trưng bày ngoài trời.',
    image: featuredLion,
    alt: 'Tượng Quan Âm cưỡi sư tử',
    badge: 'Nổi bật',
  },
  {
    title: 'Bộ 18 vị La Hán',
    category: 'Tượng công viên · tượng đá',
    description: 'Giải pháp đồng bộ cho cảnh quan chùa, sân vườn nghệ thuật và khuôn viên lớn.',
    image: featuredStone,
    alt: 'Bộ tượng 18 vị La Hán bằng đá',
  },
  {
    title: 'Phù điêu trang trí',
    category: 'Phù điêu thủ công',
    description: 'Bố cục chạm khắc tạo chiều sâu thị giác cho nội thất, tiền sảnh và công trình văn hoá.',
    image: featuredRelief,
    alt: 'Phù điêu nghệ thuật thủ công',
  },
  {
    title: 'Tượng chân dung đặt riêng',
    category: 'Điêu khắc chân dung',
    description: 'Tái hiện thần thái cá nhân bằng tỷ lệ chính xác và xử lý bề mặt tinh tế.',
    image: featuredPortrait,
    alt: 'Tượng chân dung được điêu khắc thủ công',
  },
  {
    title: 'Tượng Phật Thích Ca',
    category: 'Phục chế và chế tác tượng Phật',
    description: 'Chuẩn thần thái, trang phục và bề mặt hoàn thiện cho không gian thờ tự trang nghiêm.',
    image: featureBuddha,
    alt: 'Tượng Phật Thích Ca hoàn thiện',
  },
];

export const categories: CategoryItem[] = [
  { title: 'tượng công viên', description: 'Tác phẩm kích thước lớn cho cảnh quan đô thị, resort và khu văn hoá.' },
  { title: 'manơcanh bảo tàng', description: 'Mẫu trưng bày lịch sử, dân tộc học và triển lãm chuyên đề.' },
  { title: 'phù điêu', description: 'Chạm nổi trang trí cho sảnh, tường nghệ thuật, kiến trúc tín ngưỡng.' },
  { title: 'tượng tròn', description: 'Tác phẩm 360° phù hợp showroom, tiền sảnh và không gian trưng bày.' },
  { title: 'tượng phật', description: 'Thiết kế, đắp mẫu, hoàn thiện và phục chế chuẩn thần thái.' },
  { title: 'tượng composite', description: 'Giải pháp nhẹ, bền, linh hoạt cho dự án thương mại và cảnh quan.' },
  { title: 'tượng đồng', description: 'Hiệu ứng sang trọng, bền vững cho công trình kỷ niệm và tượng chân dung.' },
  { title: 'tượng đá', description: 'Vẻ đẹp trường tồn cho sân vườn, công viên và khu tưởng niệm.' },
  { title: 'tượng gỗ', description: 'Chạm khắc mang chiều sâu vật liệu và cảm giác ấm áp thủ công.' },
  { title: 'trang trí sân vườn', description: 'Điểm nhấn nghệ thuật cho lối đi, hồ cảnh, tiểu cảnh và villa.' },
  { title: 'non bộ và thác nước', description: 'Giải pháp cảnh quan kết hợp tượng, đá, nước và ánh sáng.' },
  { title: 'nội ngoại thất nghệ thuật', description: 'Thiết kế bespoke cho không gian sống, hospitality và thương mại.' },
];

export const materials: MaterialItem[] = [
  {
    title: 'Composite resin',
    description: 'Linh hoạt tạo hình, trọng lượng tối ưu và phù hợp cho dự án đặt riêng.',
    detail: 'Thích hợp cho mô hình, tượng trang trí và tác phẩm cần hoàn thiện màu sắc phong phú.',
  },
  {
    title: 'Đồng',
    description: 'Chất liệu sang trọng với độ bền lâu dài và bề mặt patina đẹp theo thời gian.',
    detail: 'Phù hợp tượng chân dung, công trình tưởng niệm và biểu tượng thương hiệu.',
  },
  {
    title: 'Đá',
    description: 'Mạnh mẽ, ổn định và lý tưởng cho tượng công viên, sân vườn và không gian mở.',
    detail: 'Tạo nên cảm giác uy nghi, bền bỉ và rất phù hợp với kiến trúc cảnh quan.',
  },
  {
    title: 'Gỗ',
    description: 'Ấm áp, thủ công và giàu chiều sâu bề mặt cho các tác phẩm mang tính tinh thần.',
    detail: 'Là lựa chọn lý tưởng cho phù điêu, tượng Phật, nội thất nghệ thuật và phục chế.',
  },
];

export const applications = [
  'Trang trí sân vườn và biệt thự',
  'Tiểu cảnh non bộ, hồ cá và thác nước',
  'Không gian nội thất và ngoại thất nghệ thuật',
  'Dự án văn hoá, bảo tàng và công viên',
  'Sản xuất theo bản thiết kế hoặc ý tưởng riêng',
];

export const craftsmanshipHighlights = [
  'Phác thảo tỉ lệ và moodboard theo ngữ cảnh trưng bày',
  'Lên mẫu thử trước khi thi công chính thức',
  'Kiểm soát bề mặt, sắc độ và độ bền vật liệu',
  'Đóng gói, vận chuyển và lắp đặt theo đặc thù công trình',
];

export const materialShowcase = {
  primaryImage: materialPrimaryImage,
  primaryAlt: 'Tượng nghệ thuật hoàn thiện với sắc thái mạnh mẽ',
  secondaryImage: materialSecondaryImage,
  secondaryAlt: 'Phù điêu hoàn thiện với họa tiết tinh xảo',
};

export const galleryItems: GalleryItem[] = [
  { title: 'Tượng Phật đang tạo mẫu', category: 'Chế tác', image: galleryBuddhaClay, alt: 'Tượng Phật đang trong giai đoạn tạo mẫu', tall: true },
  { title: 'Tượng Phật hoàn thiện', category: 'Tượng Phật', image: galleryBuddhaStone, alt: 'Tượng Phật hoàn thiện với sắc thái trang nghiêm' },
  { title: 'Quan Âm cưỡi voi', category: 'Tượng nghệ thuật', image: galleryQuanAm, alt: 'Tượng Quan Âm cưỡi voi', tall: true },
  { title: 'Tượng chiến tướng', category: 'Tượng tròn', image: galleryWarrior, alt: 'Tượng chiến tướng trang trí', tall: true },
  { title: 'Phù điêu trang trí', category: 'Phù điêu', image: galleryReliefWide, alt: 'Phù điêu trang trí nghệ thuật' },
  { title: 'Phù điêu chủ đề thiên nhiên', category: 'Phù điêu', image: galleryReliefTree, alt: 'Phù điêu với hoa văn cây cối và động vật' },
  { title: 'Tượng chân dung', category: 'Chân dung', image: galleryPortraitBust, alt: 'Các mẫu tượng chân dung trong xưởng', tall: true },
];

export const whyChooseUs = [
  {
    title: 'Tinh thần thủ công chuẩn tác phẩm',
    description: 'Mỗi dự án được xử lý như một tác phẩm trưng bày: cân tỷ lệ, nhịp khối và bề mặt hoàn thiện đều được chăm chút kỹ lưỡng.',
  },
  {
    title: 'Am hiểu nhiều ngữ cảnh ứng dụng',
    description: 'Từ bảo tàng, công viên, sân vườn đến không gian nội ngoại thất, xưởng có kinh nghiệm thiết kế phù hợp với từng môi trường trưng bày.',
  },
  {
    title: 'Chất liệu đa dạng, giải pháp linh hoạt',
    description: 'Composite, đồng, đá, gỗ và các vật liệu mỹ thuật khác được lựa chọn theo mục tiêu thẩm mỹ và ngân sách.',
  },
  {
    title: 'Đồng hành từ ý tưởng đến lắp đặt',
    description: 'Khách hàng được tư vấn xuyên suốt từ phác thảo ban đầu, mẫu thử, sản xuất đến bàn giao tác phẩm hoàn thiện.',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: 'Nguyễn Văn Minh',
    meta: 'TP.HCM · tượng chân dung đặt riêng',
    quote: 'Kết quả hoàn thiện vượt mong đợi, đặc biệt ở phần thần thái gương mặt. Xưởng làm việc chỉn chu và tư vấn rất có gu thẩm mỹ.',
  },
  {
    name: 'Thích Phước Thành',
    meta: 'Bình Dương · bộ tượng đá sân chùa',
    quote: 'Các pho tượng đồng nhất về phong cách, bề mặt xử lý đẹp và giao đúng tiến độ. Đây là một đơn vị làm nghề rất có tâm.',
  },
  {
    name: 'Lê Thị Hương',
    meta: 'Đồng Nai · phù điêu gỗ trang trí',
    quote: 'Tác phẩm treo lên rất sang và tạo chiều sâu cho không gian. Đường nét tinh xảo, màu sắc và tỷ lệ đều được xử lý rất vừa mắt.',
  },
];

export const faqs: FAQItem[] = [
  {
    question: 'Điêu Khắc Văn Nhân nhận làm theo thiết kế riêng không?',
    answer: 'Có. Chúng tôi nhận phát triển tác phẩm từ ý tưởng sơ bộ, hình tham khảo hoặc bản vẽ kỹ thuật để tạo nên mẫu tượng phù hợp với không gian sử dụng.',
  },
  {
    question: 'Xưởng phù hợp với những loại công trình nào?',
    answer: 'Từ sân vườn, biệt thự, resort, công viên, bảo tàng đến không gian nội ngoại thất nghệ thuật — đội ngũ đều có thể đề xuất chất liệu và quy cách thi công phù hợp.',
  },
  {
    question: 'Có nhận phục chế và sao chép tượng Phật không?',
    answer: 'Có. Đây là một trong những dịch vụ thế mạnh được kế thừa từ thương hiệu cũ, tập trung vào độ chuẩn xác về thần thái, tỷ lệ và bề mặt hoàn thiện.',
  },
  {
    question: 'Thời gian thực hiện dự án thường bao lâu?',
    answer: 'Tùy kích thước, chất liệu và độ phức tạp. Sau khi tiếp nhận thông tin, chúng tôi sẽ đề xuất tiến độ cụ thể cùng phương án thi công phù hợp.',
  },
];
