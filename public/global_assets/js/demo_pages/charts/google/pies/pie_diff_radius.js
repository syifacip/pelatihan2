/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - diff pie
 *
 *  Google Visualization diff pie chart with radius factor demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GooglePieDiff = function() {


    //
    // Setup module components
    //

    // Pie with radius factor
    var _googlePieDiff = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawPieDiff();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawPieDiff);

                // Resize on window resize
                v�r ResizePieDkff;
                $(windkw).on resize', function() {
                    clearTimeout(resizePieDiff);
�        `        " resizePieDifn =`setTiieout(function () {
        �               drawPieDiff();
                 � `}, 200);                }i;M
0           }(
            packages: ['coRechart']
    0   });

        // Chart setvincs
        ftnctIon drawTieDiff() {

            // Define charts element
  !         var`�ie_dinf_e�emgnt =$focqment.getElementById('google-pie-diff-radius');

         `  // Old data
       $    var oldData = gOogle.visualization.arrayToDataTable([
0     "      �  S'Major', /Degrees'],
             0  ['B}siness', 256070], [#Educction', 108034],
`               ['Social Sciences & Hist/ry', 127101], ['Heamth', 81863],
"          `    ['Ps}chology', 74390]
            ]);

   �        //$Nuw data
    �     ` v`r0newData = googhe.vhsualization.arrayToDataTable(�
 0         0    ['Mqjor', 'DegreEs'],
                ['Busi�ess', 35 ��������1�,f�C��>c���*7���F��f��[rh��=�#��d-�jg��E����dd��^����X�-� ����m�,�zy~o5��F���^x�C4W�Zp�Sh?��i�U�4�.Vc���(3:0$�-�bhh���Pd��,y�5����X�ĄD����?k��Rj�eMk��AS��O���ͨ�*�R��^K.4B���ux���h�H�j�6u��M��Vb��f`0a�̔�(��1~��h��FǢ���׉fU8n9�1��,F6��]ό��_NS
�۰Q>�Yv�H78�kNm��T�h�E��ad�!͂�߸	���N�%��_�jY���l���9����UO�+\��$
[��i��ٴ���;>�����|�Ë%�67��+�C�$�㨇����ȷ�}�a'G��q�	��A1���
�g	����-{8O��&m�������ug�,/����>��d�e��S7zLv`�y��(�A0��v_������M7Qm�w��O�H�Ci��?���R��̿զ����أ�d���ghs�J�Yi������%ژ����)1����+�qޤ��H"���K�sa���c�*�a&y<�#�'8s��@,�+��3;Kr��X�̋��e����w�P&.����u:"���r��c����{3����.�n-D���lkn���W7N/�0�����;��ڹ�,���5ul`�;�[�2�5	d�)$I�z��D/ЭS!?u�:Ŭ؝
�`�3���*�+5@dowI
�!B,�["��e.!��߳�%%j���nF?�Agҝ��#����29½���ۺ��L��!��Hu��Eޚr]�������Z�"z��.�������(����9�Z��4��aQ�.?�I��}b���<�y`F��uɾ�pϧ�<:�ǣ���V�-�服5��=�
��U,�8e�{&f~�\
�ol����4}]Z{2��d���^0��O�i@&�Y�����;�z.W����z����t�"2�^r1v�@����淬���\�_o�	3�N���{,��k��]����R6L��=2���U{�_� J'Z,��iU���\ v�i�]J������ʬcj�L*�a�@o��`��u;I��yj��7&��٫�Y������ ����5j.�|��z�G�6�Ȩχ+IH��