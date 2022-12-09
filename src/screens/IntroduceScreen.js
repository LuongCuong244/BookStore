import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    ScrollView,
} from 'react-native';

import LinearGradient from "react-native-linear-gradient";
import BookItem from "../components/BookItem";
import SearchBar from "../components/Search";

import { books } from "../data/books";

export default function IntroduceScreen(props) {

    return (
        <LinearGradient
            style={{flex: 1}}
            colors={['#3EB4BD', '#8ACDDA']}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }}
            >
                <View style={styles.container}>
                    <Text style={styles.header} >{"TIỆN ÍCH - GIẢI TRÍ - KẾT NỐI"}</Text>
                    <Text style={[styles.normalText, { marginVertical: 10 }]} >
                        {"- Nhà sách Tiến Thọ là tổ hợp mua sắm - giải trí rộng hơn 2500m2, vừa là nơi để mọi người thỏa mãn nhu cầu của bản thân, vừa là không gian giúp giải phóng cảm xúc cá nhân."}
                    </Text>

                    <Text style={[styles.normalText, { marginVertical: 10 }]} >{"Lịch sử hình thành và phát triển"}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"1. Lịch sử hình thành"}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Tiền thân là tiệm sách cũ tại 612 đường Láng, mở cửa năm 1997"}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Từ 1999 – 2010, phát triển lĩnh vực bán buôn và xuất bản. Trong giai đoạn này, Nhà sách Tiến Thọ chiến thị phần lớn tại thị trường miền Bắc."}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- 2010 đánh dấu một mốc quan trọng: Mở nhà sách Tiến Thọ bán lẻ - 828 Đường Láng với diện tích ban đầu 620m2"}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Cuối 10/2016: mua lại nhà sách Nguyễn Văn Cừ và đầu 1/2017: Khai trương Nhà sách Tiến Thọ 36 Xuân Thủy."}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Từ 2019 – nay lần lượt khai trương các nhà sách: 424 Nguyễn Trãi, 697 Giải Phóng, 50 Nguyễn Thị Lưu, tp Bắc Giang, 282 Lương Ngọc Quyến, tp Thái Nguyên"}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"2. Tư tưởng, triết lý kinh doanh"}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Tư tưởng xuyên suốt: Luôn luôn đổi mới, nâng cấp theo hướng ngày càng hoàn thiện hơn."}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Triết lý kinh doanh: NSTT cam kết mang đến khách hàng dịch vụ, sự trải nghiệm tốt nhất trong tầm giá."}</Text>
                
                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"3. Tầm nhìn"}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Với đà tăng trưởng 1 nhà sách / 1 năm trong 4 năm qua, trong 1-2 năm tiếp theo Nhà sách Tiến Thọ sẽ tiếp tục mở rộng và khai trương 2-3 cơ sở tại khu vực phía Bắc. Mục tiêu đến năm 2028, Nhà sách Tiến Thọ sẽ trở thành một chuỗi nhà sách & khu vui chơi lên đến 18-20 cơ sở."}</Text>
                
                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"Nhà sách Tiến Thọ với 6 cơ sở:"}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Cơ sở 1: 828 Đường Láng - Đống Đa - Hà Nội"}</Text>
                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Cơ sở 2: 36 Xuân Thủy - Cầu Giấy - Hà Nội"}</Text>
                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Cơ sở 3 : 424 Nguyễn Trãi - Thanh Xuân - Hà Nội"}</Text>
                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Cơ sở 4 : 697 Giải Phóng - Hoàng Mai - Hà Nội"}</Text>
                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Cơ sở 5 : 50 Nguyễn Thị Lưu - T.P Bắc Giang"}</Text>
                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Cơ sở 6 : 282a Lương Ngọc Quyến - Thái Nguyên"}</Text>
                </View >
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    header: {
        fontSize: 20,
        color: 'rgb(230,230,230)',
        width: '100%',
        textAlign: 'center',
        marginTop: 15,
    },
    normalText: {
        fontSize: 17,
        color: 'rgb(50,50,50)',
    }
})