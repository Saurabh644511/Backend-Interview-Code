const Sale = require("../models/Sale");

const getTopCustomer = async (req, res) => {
    try {
        const topCustomer = await Sale.aggregate([
            {
                $group: {
                    _id: "$customerId",
                    customerName: {
                        $first: "$customerName",
                    },
                    totalSpend: {
                        $sum: "$amount",
                    },
                },
            },
            {
                $sort: {
                    totalSpend: -1 // -1 for descending and +1 for ascending
                    
                },
            },
            {
                $limit: 3,
            }
        ]);
        res.status(200).json({
            success: true,
            data: topCustomer
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {getTopCustomer}