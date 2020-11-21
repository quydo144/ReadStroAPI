const {
    createHistory,
    getHistory,
    updateHistory,
    deleteHistory,
    getHistoryDetail
} = require("./service.js");

module.exports = {
    createHistory: (req, res) => {
        const body = req.body;
        createHistory(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Lỗi kết nối cơ sở dữ liệu"
                });
            }
            return res.status(200).json({
                success: 1,
                message: 'Lưu lịch sử thành công'
            });
        });
    },

    getHistory: (req, res) => {
        const uid_user = req.params.uid_user;
        getHistory(uid_user, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Không tìm thấy"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    getHistoryDetail: (req, res) => {
        getHistoryDetail(req.body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Không tìm thấy"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    deleteHistory: (req, res) => {
        const body = req.body
        deleteHistory(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.json({
                    success: 0,
                    message: "Có lỗi xảy ra"
                });
            }
            return res.json({
                success: 1,
                data: "Xoá thành công"
            });
        });
    },

    updateHistory: (req, res) => {
        const body = req.body;
        updateHistory(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.json({
                    success: 0,
                    message: "Có lỗi xảy ra"
                });
            }
            return res.json({
                success: 1,
                message: "Cập nhật thành công"
            });
        });
    }
};