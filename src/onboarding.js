function Onboarding({ userName, updateUserName, setShowOnboard }) {
  return (
    <div
      class="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-20 z-50 p-4"
      onClick={() => setShowOnboard(false)}
    >
      <div
        class="bg-white max-w-screen-md w-full p-4 rounded-lg relative"
        onClick={$c((e) => e.preventDefault())}
      >
        <div class="absolute top-2 right-2">
          <button
            class="p-2 bg-neutral-50 rounded-lg"
            onClick={() => setShowOnboard(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="mb-4 text-xl font-semibold text-center">Cara Bermain</div>

        <div class="mb-2">
          Masukkan nama pemain, setelah masuk bisa ganti nama dengan klik nama
          di kiri bawah
        </div>

        <div class="font-semibold mb-1">Nama pemain</div>
        <input
          value={userName}
          placeholder="Nama Pemain"
          onBlur={$c((e) => {
            $s(updateUserName)(e.target.value);
          })}
          onKeyDown={$c((e) => {
            if (e.key === "Enter") {
              $s(updateUserName)(e.target.value);
              $s(setShowOnboard)(false);
            }
          })}
          type="text"
          class="border rounded-lg border-neutral-75 px-4 py-2 w-full mb-2"
        ></input>
        <div class="mb-2">
          Jawab pertanyaan dalam 15 detik sesuai petunjuk dan kata acak di atas.
          Pemain tercepat akan mendapatkan skor seperti berikut.
        </div>
        <ul class="list-disc pl-4 mb-2">
          <li>
            Tercepat pertama: <span class="font-semibold">+10</span>
          </li>
          <li>
            Tercepat kedua: <span class="font-semibold">+5</span>
          </li>
          <li>
            Sisanya: <span class="font-semibold">+1</span>
          </li>
        </ul>
        <div class="mb-4">
          Pemain dengan skor terbanyak akan terlihat di papan peringkat.
        </div>
        <div class="mb-2 text-xl font-semibold">Contoh</div>
        <ul class="list-disc pl-4 mb-2">
          <li>
            Pertanyaan: <span class="font-semibold">RABTA</span> Arah jam 9 itu
            sama dengan arah
          </li>
          <li>
            Jawaban: <span class="font-semibold">BARAT</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Onboarding;
