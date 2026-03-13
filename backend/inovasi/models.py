from django.db import models

class Inovasi(models.Model):
    nama = models.CharField(max_length=200)
    deskripsi = models.TextField()
    tanggal = models.DateField()

    def __str__(self):
        return self.nama

    class Meta:
        verbose_name = "Inovasi"
        verbose_name_plural = "Inovasi"