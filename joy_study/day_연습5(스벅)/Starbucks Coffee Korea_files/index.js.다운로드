$(document).ready(function () {
	// 화면 중앙 로그인 영역 처리
	__ajaxCall(m_domain_ssl + "/interface/checkLogin.do", {}, true, "jsonp", "post"
		,function (_response) {
			if (_response.result_code == "SUCCESS") {
				$(".line_reward_wrap").hide();
				$(".line_msr").show();
			} else {
				$(".line_reward_wrap").show();
				$(".line_msr").hide();
			}
		}
		,function (_error) {
		}
	);
});