<script>
        // Danh sách các link
        const links = [
		"https://adpvn.co/N3SV","https://adpvn.co/Cxkt","https://adpvn.top/XfbV","https://adpvn.co/879E","https://adpvn.co/neCh","https://adpvn.co/Y8K2","https://adpvn.co/wnTV","https://adpvn.co/JAAJ","https://adpvn.co/Ccwz","https://adpvn.co/Wcdn","https://adpvn.co/fGc3","https://adpvn.co/ouM5","https://adpvn.co/4QSK","https://adpvn.co/aQ31","https://adpvn.co/MHFb"
            // Thêm các link khác tại đây
        ];

        // Hàm mở ngẫu nhiên một link sau 15 giây
        function openRandomLink() {
            // Lấy ngẫu nhiên một link từ danh sách
            const randomIndex = Math.floor(Math.random() * links.length);
            const randomLink = links[randomIndex];
            
            // Mở link trong tab mới
            window.open(randomLink, '_blank');
        }

        // Thiết lập mở ngẫu nhiên một link cứ sau 15 giây
        window.onload = function() {
            setInterval(openRandomLink, 15000); // 15000 milliseconds = 15 seconds
        };
</script>
