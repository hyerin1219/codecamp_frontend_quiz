import { useEffect } from 'react';
declare const window: typeof globalThis & {
    kakao: any;
};
export default function KakaoMapPage(): JSX.Element {
    useEffect(() => {
        const container = document.getElementById('map'); // 지도를 담은 영역의 DOM 레퍼

        const option = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
            // 지도를 생성할 때 필요한 기본 옵션
        };
        const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
        const map = new window.kakao.maps.Map(container, option);
        const markerImg = new kakao.maps.MarkerImage('https://www.urbanbrush.net/web/wp-content/uploads/edd/2020/11/urbanbrush-20201104103659627968.jpg', new kakao.maps.Size(100, 100));
        var marker = new kakao.maps.Marker({
            position: markerPosition,
            draggable: true,
            opacity: 0.5,
            image: markerImg,
        });
        marker.setMap(map);
    }, []);
    return (
        <>
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b2f7deca5ab3989231a32111ffa2246b"></script>
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=clusterer"></script>
            <div id="map" style={{ width: 500, height: 400 }}></div>
        </>
    );
}
